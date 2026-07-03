import React, { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LogOut, RefreshCw, Search, Inbox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import logo from '@/assets/logo.png';
import {
  listSubmissions,
  updateStatus,
  computeStats,
  signOut,
  TYPE_LABELS,
  STATUSES,
  STATUS_LABELS,
} from '@/lib/submissions';

const PRIMARY = 'hsl(220, 70%, 45%)';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const statusStyle = {
  new: 'bg-primary/10 text-primary',
  in_review: 'bg-amber-100 text-amber-700',
  contacted: 'bg-blue-100 text-blue-700',
  closed: 'bg-muted text-muted-foreground',
};

const AdminDashboard = ({ session }) => {
  const { toast } = useToast();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    setErr('');
    try {
      setRows(await listSubmissions());
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const stats = useMemo(() => computeStats(rows), [rows]);

  const filtered = useMemo(
    () =>
      rows.filter((r) => {
        if (typeFilter !== 'all' && r.type !== typeFilter) return false;
        if (statusFilter !== 'all' && r.status !== statusFilter) return false;
        if (query) {
          const haystack = `${r.name} ${r.email} ${r.message}`.toLowerCase();
          if (!haystack.includes(query.toLowerCase())) return false;
        }
        return true;
      }),
    [rows, typeFilter, statusFilter, query],
  );

  const chartData = Object.keys(TYPE_LABELS).map((k) => ({
    name: TYPE_LABELS[k],
    value: stats.byType[k] || 0,
  }));

  const handleStatus = async (id, status) => {
    const previous = rows.find((r) => r.id === id)?.status;
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    try {
      await updateStatus(id, status);
    } catch (e) {
      // Roll back only this row and tell the admin — don't reload the whole table.
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: previous } : r)));
      toast({
        title: 'Could not update status',
        description: e.message,
        variant: 'destructive',
      });
    }
  };

  const cards = [
    { label: 'Total', value: stats.total },
    { label: 'New', value: stats.newCount },
    { label: 'Volunteers', value: stats.byType.volunteer },
    { label: 'Mentors', value: stats.byType.mentor },
    { label: 'Donations', value: stats.byType.donation },
    { label: 'Contacts', value: stats.byType.contact },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Novola" className="h-8 w-auto" />
            <span className="font-semibold hidden sm:inline">Submissions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">{session?.user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {cards.map((c) => (
            <div key={c.label} className="bg-card rounded-xl border border-border p-4">
              <p className="text-2xl font-bold">{c.value}</p>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl border border-border p-4">
          <h2 className="font-semibold mb-4">Applications by type</h2>
          <div style={{ width: '100%', height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} fontSize={12} tickLine={false} axisLine={false} width={40} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} fill={PRIMARY} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search name, email, message…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="sm:w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              {Object.entries(TYPE_LABELS).map(([k, v]) => (
                <SelectItem key={k} value={k}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="sm:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((s) => (
                <SelectItem key={s} value={s}>
                  {STATUS_LABELS[s]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={load} title="Refresh">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading…</div>
          ) : err ? (
            <div className="p-8 text-center text-destructive">{err}</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Inbox className="h-8 w-8 mx-auto mb-3 opacity-50" />
              {rows.length === 0 ? 'No submissions yet.' : 'No submissions match your filters.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-4 py-3">Date</th>
                    <th className="text-left font-medium px-4 py-3">Type</th>
                    <th className="text-left font-medium px-4 py-3">Name</th>
                    <th className="text-left font-medium px-4 py-3 hidden md:table-cell">Email</th>
                    <th className="text-left font-medium px-4 py-3">Status</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id} className="border-t border-border hover:bg-muted/30">
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                        {formatDate(r.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary">{TYPE_LABELS[r.type] || r.type}</Badge>
                      </td>
                      <td className="px-4 py-3 font-medium">{r.name}</td>
                      <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">{r.email}</td>
                      <td className="px-4 py-3">
                        <select
                          value={r.status}
                          onChange={(e) => handleStatus(r.id, e.target.value)}
                          className={`rounded-md px-2 py-1 text-xs font-medium border border-border ${statusStyle[r.status] || ''}`}
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {STATUS_LABELS[s]}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm" onClick={() => setSelected(r)}>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <Badge variant="secondary">{TYPE_LABELS[selected.type] || selected.type}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <a href={`mailto:${selected.email}`} className="text-primary hover:underline">
                    {selected.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submitted</span>
                  <span>{formatDate(selected.created_at)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inquiry</span>
                  <span>{selected.inquiry_type || '—'}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground mb-1">Message</p>
                  <p className="whitespace-pre-wrap leading-relaxed text-foreground">{selected.message}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
