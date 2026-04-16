import { useState, useEffect } from "react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, TrendingDown, Bell, Search, Settings, Home, BarChart2, ShoppingBag, Star, LogOut, Menu, X, ChevronDown, Eye, Edit2, Trash2, Plus, Filter, Download, RefreshCw, ArrowUpRight, ArrowDownRight } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 42000, orders: 320, profit: 12000 },
  { month: "Feb", revenue: 51000, orders: 410, profit: 15000 },
  { month: "Mar", revenue: 47000, orders: 370, profit: 13500 },
  { month: "Apr", revenue: 63000, orders: 520, profit: 19000 },
  { month: "May", revenue: 58000, orders: 460, profit: 17000 },
  { month: "Jun", revenue: 72000, orders: 590, profit: 22000 },
  { month: "Jul", revenue: 69000, orders: 560, profit: 21000 },
  { month: "Aug", revenue: 81000, orders: 640, profit: 25000 },
  { month: "Sep", revenue: 76000, orders: 610, profit: 23000 },
  { month: "Oct", revenue: 89000, orders: 720, profit: 28000 },
  { month: "Nov", revenue: 95000, orders: 780, profit: 31000 },
  { month: "Dec", revenue: 112000, orders: 920, profit: 38000 },
];

const categoryData = [
  { name: "Electronics", value: 38, color: "#6366f1" },
  { name: "Clothing", value: 25, color: "#8b5cf6" },
  { name: "Home & Garden", value: 18, color: "#a78bfa" },
  { name: "Sports", value: 12, color: "#c4b5fd" },
  { name: "Books", value: 7, color: "#ddd6fe" },
];

const topProducts = [
  { id: 1, name: "iPhone 15 Pro Max", category: "Electronics", price: 1199, sold: 1240, revenue: 1486760, stock: 45, rating: 4.8, trend: "up" },
  { id: 2, name: "Samsung Galaxy S24", category: "Electronics", price: 999, sold: 980, revenue: 979020, stock: 62, rating: 4.7, trend: "up" },
  { id: 3, name: "Nike Air Max 2024", category: "Sports", price: 189, sold: 2140, revenue: 404460, stock: 128, rating: 4.6, trend: "up" },
  { id: 4, name: "Sony WH-1000XM5", category: "Electronics", price: 349, sold: 870, revenue: 303630, stock: 34, rating: 4.9, trend: "down" },
  { id: 5, name: "Levi's 501 Jeans", category: "Clothing", price: 89, sold: 3200, revenue: 284800, stock: 215, rating: 4.5, trend: "up" },
  { id: 6, name: "Dyson V15 Vacuum", category: "Home & Garden", price: 699, sold: 340, revenue: 237660, stock: 28, rating: 4.8, trend: "down" },
];

const recentOrders = [
  { id: "#ORD-7842", customer: "Priya Sharma", avatar: "PS", email: "priya@email.com", product: "iPhone 15 Pro", amount: 1199, status: "delivered", date: "Apr 15, 2026", items: 1 },
  { id: "#ORD-7841", customer: "Rahul Verma", avatar: "RV", email: "rahul@email.com", product: "Nike Air Max", amount: 378, status: "processing", date: "Apr 15, 2026", items: 2 },
  { id: "#ORD-7840", customer: "Anjali Singh", avatar: "AS", email: "anjali@email.com", product: "Sony Headphones", amount: 349, status: "shipped", date: "Apr 14, 2026", items: 1 },
  { id: "#ORD-7839", customer: "Vikram Patel", avatar: "VP", email: "vikram@email.com", product: "Levi's 501 Jeans", amount: 267, status: "pending", date: "Apr 14, 2026", items: 3 },
  { id: "#ORD-7838", customer: "Meera Nair", avatar: "MN", email: "meera@email.com", product: "Dyson Vacuum", amount: 699, status: "delivered", date: "Apr 13, 2026", items: 1 },
  { id: "#ORD-7837", customer: "Arjun Kumar", avatar: "AK", email: "arjun@email.com", product: "Samsung Galaxy S24", amount: 999, status: "cancelled", date: "Apr 13, 2026", items: 1 },
  { id: "#ORD-7836", customer: "Deepika Rao", avatar: "DR", email: "deepika@email.com", product: "MacBook Air M3", amount: 1299, status: "shipped", date: "Apr 12, 2026", items: 1 },
];

const customers = [
  { id: 1, name: "Priya Sharma", email: "priya@email.com", avatar: "PS", orders: 24, spent: 12450, joined: "Jan 2024", status: "active", location: "Mumbai" },
  { id: 2, name: "Rahul Verma", email: "rahul@email.com", avatar: "RV", orders: 18, spent: 8920, joined: "Mar 2024", status: "active", location: "Delhi" },
  { id: 3, name: "Anjali Singh", email: "anjali@email.com", avatar: "AS", orders: 31, spent: 15670, joined: "Dec 2023", status: "active", location: "Bangalore" },
  { id: 4, name: "Vikram Patel", email: "vikram@email.com", avatar: "VP", orders: 9, spent: 3240, joined: "Jun 2024", status: "inactive", location: "Ahmedabad" },
  { id: 5, name: "Meera Nair", email: "meera@email.com", avatar: "MN", orders: 42, spent: 22100, joined: "Oct 2023", status: "active", location: "Kochi" },
  { id: 6, name: "Arjun Kumar", email: "arjun@email.com", avatar: "AK", orders: 7, spent: 2890, joined: "Aug 2024", status: "inactive", location: "Chennai" },
];

const inventoryData = [
  { category: "Electronics", total: 1240, inStock: 890, lowStock: 210, outOfStock: 140 },
  { category: "Clothing", total: 3800, inStock: 3200, lowStock: 450, outOfStock: 150 },
  { category: "Home & Garden", total: 940, inStock: 720, lowStock: 160, outOfStock: 60 },
  { category: "Sports", total: 1560, inStock: 1280, lowStock: 210, outOfStock: 70 },
  { category: "Books", total: 2100, inStock: 1940, lowStock: 120, outOfStock: 40 },
];

const weeklyTraffic = [
  { day: "Mon", visitors: 4200, conversions: 180 },
  { day: "Tue", visitors: 3800, conversions: 160 },
  { day: "Wed", visitors: 5100, conversions: 220 },
  { day: "Thu", visitors: 4600, conversions: 195 },
  { day: "Fri", visitors: 6200, conversions: 280 },
  { day: "Sat", visitors: 7800, conversions: 350 },
  { day: "Sun", visitors: 5900, conversions: 260 },
];

const statusColors = {
  delivered: { bg: "#dcfce7", text: "#166534", label: "Delivered" },
  processing: { bg: "#fef9c3", text: "#854d0e", label: "Processing" },
  shipped: { bg: "#dbeafe", text: "#1e40af", label: "Shipped" },
  pending: { bg: "#f3e8ff", text: "#6b21a8", label: "Pending" },
  cancelled: { bg: "#fee2e2", text: "#991b1b", label: "Cancelled" },
};

const avatarColors = ["#6366f1", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981", "#ef4444", "#ec4899"];

export default function EcommerceDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chartType, setChartType] = useState("revenue");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderFilter, setOrderFilter] = useState("all");
  const [notifications, setNotifications] = useState(5);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [timeRange, setTimeRange] = useState("12m");
  const [toast, setToast] = useState(null);
  const [addProductModal, setAddProductModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filteredOrders = recentOrders.filter(o =>
    (orderFilter === "all" || o.status === orderFilter) &&
    (o.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.product.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedOrders = filteredOrders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const getFilteredChartData = () => {
    if (timeRange === "3m") return revenueData.slice(9);
    if (timeRange === "6m") return revenueData.slice(6);
    return revenueData;
  };

  const totalRevenue = revenueData.reduce((s, d) => s + d.revenue, 0);
  const totalOrders = revenueData.reduce((s, d) => s + d.orders, 0);
  const totalProfit = revenueData.reduce((s, d) => s + d.profit, 0);

  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "orders", icon: ShoppingCart, label: "Orders" },
    { id: "products", icon: Package, label: "Products" },
    { id: "customers", icon: Users, label: "Customers" },
    { id: "analytics", icon: BarChart2, label: "Analytics" },
    { id: "inventory", icon: ShoppingBag, label: "Inventory" },
  ];

  const metricCards = [
    {
      title: "Total Revenue", value: `₹${(totalRevenue / 100000).toFixed(2)}L`,
      sub: "+18.2% vs last year", icon: DollarSign, color: "#6366f1", bg: "#eef2ff", trend: "up",
    },
    {
      title: "Total Orders", value: totalOrders.toLocaleString(),
      sub: "+12.5% vs last year", icon: ShoppingCart, color: "#8b5cf6", bg: "#f5f3ff", trend: "up",
    },
    {
      title: "Active Customers", value: "8,492",
      sub: "+9.1% vs last year", icon: Users, color: "#06b6d4", bg: "#ecfeff", trend: "up",
    },
    {
      title: "Net Profit", value: `₹${(totalProfit / 100000).toFixed(2)}L`,
      sub: "+22.4% vs last year", icon: TrendingUp, color: "#10b981", bg: "#f0fdf4", trend: "up",
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", overflow: "hidden" }}>

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, padding: "12px 20px", borderRadius: 10, background: toast.type === "success" ? "#10b981" : "#ef4444", color: "#fff", fontWeight: 500, fontSize: 14, boxShadow: "0 4px 20px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 8 }}>
          {toast.type === "success" ? "✓" : "✗"} {toast.msg}
        </div>
      )}

      {/* Add Product Modal */}
      {addProductModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 32, width: 480, maxWidth: "90vw", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#111" }}>Add New Product</h2>
              <button onClick={() => setAddProductModal(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><X size={20} color="#666" /></button>
            </div>
            {["Product Name", "Category", "Price (₹)", "Stock Quantity", "Description"].map(field => (
              <div key={field} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#555", marginBottom: 6 }}>{field}</label>
                {field === "Description" ?
                  <textarea rows={3} placeholder={`Enter ${field.toLowerCase()}`} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, resize: "none", boxSizing: "border-box", outline: "none" }} /> :
                  field === "Category" ?
                    <select style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, background: "#fff", boxSizing: "border-box", outline: "none" }}>
                      {["Electronics", "Clothing", "Home & Garden", "Sports", "Books"].map(c => <option key={c}>{c}</option>)}
                    </select> :
                    <input type={field.includes("Price") || field.includes("Stock") ? "number" : "text"} placeholder={`Enter ${field.toLowerCase()}`} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, boxSizing: "border-box", outline: "none" }} />
                }
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <button onClick={() => { setAddProductModal(false); showToast("Product added successfully!"); }} style={{ flex: 1, padding: "11px", borderRadius: 8, background: "#6366f1", color: "#fff", border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Add Product</button>
              <button onClick={() => setAddProductModal(false)} style={{ flex: 1, padding: "11px", borderRadius: 8, background: "#f1f5f9", color: "#555", border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: sidebarOpen ? 240 : 70, background: "#fff", borderRight: "1px solid #e8ecf0", transition: "width 0.25s ease", display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden", zIndex: 100 }}>
        {/* Logo */}
        <div style={{ padding: sidebarOpen ? "22px 24px" : "22px 18px", borderBottom: "1px solid #f0f4f8", display: "flex", alignItems: "center", gap: 10, minHeight: 72 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <ShoppingBag size={18} color="#fff" />
          </div>
          {sidebarOpen && <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#111", lineHeight: 1.2 }}>ShopDash</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>Admin Panel</div>
          </div>}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", padding: sidebarOpen ? "0 8px 8px" : "0", marginBottom: 4, overflow: "hidden", whiteSpace: "nowrap" }}>
            {sidebarOpen ? "Main Menu" : ""}
          </div>
          {navItems.map(item => {
            const Icon = item.icon;
            const active = activeNav === item.id;
            return (
              <button key={item.id} onClick={() => setActiveNav(item.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: sidebarOpen ? "10px 12px" : "10px 14px", borderRadius: 10, background: active ? "#eef2ff" : "transparent", color: active ? "#6366f1" : "#6b7280", border: "none", cursor: "pointer", marginBottom: 2, transition: "all 0.15s", fontWeight: active ? 600 : 400, fontSize: 14, textAlign: "left", justifyContent: sidebarOpen ? "flex-start" : "center" }}>
                <Icon size={18} />
                {sidebarOpen && <span style={{ whiteSpace: "nowrap" }}>{item.label}</span>}
                {sidebarOpen && item.id === "orders" && <span style={{ marginLeft: "auto", background: "#6366f1", color: "#fff", fontSize: 11, fontWeight: 700, padding: "1px 7px", borderRadius: 20 }}>8</span>}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div style={{ padding: "16px 12px", borderTop: "1px solid #f0f4f8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 10, background: "#f8fafc" }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff", fontWeight: 600, fontSize: 13 }}>RA</div>
            {sidebarOpen && <div style={{ overflow: "hidden" }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#111", whiteSpace: "nowrap" }}>Rajesh Admin</div>
              <div style={{ fontSize: 11, color: "#9ca3af", whiteSpace: "nowrap" }}>Super Admin</div>
            </div>}
          </div>
          <button onClick={() => showToast("Logged out successfully")} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: sidebarOpen ? "flex-start" : "center", gap: 8, padding: sidebarOpen ? "8px 10px" : "8px 14px", marginTop: 4, background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 13, borderRadius: 8 }}>
            <LogOut size={16} />{sidebarOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <header style={{ background: "#fff", borderBottom: "1px solid #e8ecf0", padding: "0 24px", height: 72, display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 8, color: "#6b7280" }}>
            <Menu size={20} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ position: "relative", maxWidth: 380 }}>
              <Search size={16} color="#9ca3af" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search orders, products, customers..." style={{ width: "100%", padding: "9px 12px 9px 36px", borderRadius: 10, border: "1.5px solid #e8ecf0", fontSize: 14, outline: "none", background: "#f8fafc", boxSizing: "border-box" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ position: "relative" }}>
              <button onClick={() => { setShowNotifPanel(!showNotifPanel); setNotifications(0); }} style={{ width: 40, height: 40, borderRadius: 10, background: "#f8fafc", border: "1px solid #e8ecf0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Bell size={18} color="#6b7280" />
                {notifications > 0 && <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, background: "#ef4444", borderRadius: "50%", border: "2px solid #fff" }} />}
              </button>
              {showNotifPanel && (
                <div style={{ position: "absolute", right: 0, top: 48, width: 300, background: "#fff", borderRadius: 12, border: "1px solid #e8ecf0", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", zIndex: 200 }}>
                  <div style={{ padding: "14px 16px", borderBottom: "1px solid #f0f4f8", fontWeight: 600, fontSize: 14 }}>Notifications</div>
                  {["New order #ORD-7842 received", "Low stock alert: Dyson V15 Vacuum", "Customer Anjali Singh left a review", "Payment confirmed for #ORD-7840", "New user registered: Arjun Kumar"].map((n, i) => (
                    <div key={i} style={{ padding: "12px 16px", borderBottom: "1px solid #f8fafc", fontSize: 13, color: "#374151", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", marginTop: 4, flexShrink: 0 }} />
                      {n}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button style={{ width: 40, height: 40, borderRadius: 10, background: "#f8fafc", border: "1px solid #e8ecf0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Settings size={18} color="#6b7280" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflow: "auto", padding: 24 }}>

          {/* ── DASHBOARD ── */}
          {activeNav === "dashboard" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Dashboard</h1>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>Welcome back, Rajesh! Here's what's happening today.</p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => showToast("Report exported!")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, background: "#fff", border: "1px solid #e8ecf0", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#374151" }}>
                    <Download size={15} /> Export
                  </button>
                  <button onClick={() => showToast("Data refreshed!")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, background: "#6366f1", border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#fff" }}>
                    <RefreshCw size={15} /> Refresh
                  </button>
                </div>
              </div>

              {/* Metric Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
                {metricCards.map(card => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} style={{ background: "#fff", borderRadius: 14, padding: "20px 20px", border: "1px solid #f0f4f8", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.1)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                        <div style={{ width: 42, height: 42, borderRadius: 10, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={20} color={card.color} />
                        </div>
                        <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, fontWeight: 600, color: "#10b981", background: "#f0fdf4", padding: "3px 8px", borderRadius: 20 }}>
                          <ArrowUpRight size={12} /> {card.sub.split(" ")[0]}
                        </span>
                      </div>
                      <div style={{ fontSize: 26, fontWeight: 700, color: "#111", letterSpacing: "-0.02em", marginBottom: 4 }}>{card.value}</div>
                      <div style={{ fontSize: 13, color: "#9ca3af" }}>{card.title}</div>
                    </div>
                  );
                })}
              </div>

              {/* Charts Row */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 24 }}>
                {/* Revenue Chart */}
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#111" }}>Revenue Overview</h3>
                      <p style={{ margin: "3px 0 0", fontSize: 13, color: "#9ca3af" }}>Revenue and profit trends</p>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      {["3m", "6m", "12m"].map(r => (
                        <button key={r} onClick={() => setTimeRange(r)} style={{ padding: "5px 12px", borderRadius: 8, border: "1px solid", borderColor: timeRange === r ? "#6366f1" : "#e8ecf0", background: timeRange === r ? "#eef2ff" : "transparent", color: timeRange === r ? "#6366f1" : "#6b7280", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12, display: "flex", gap: 16 }}>
                    {[{ label: "Revenue", color: "#6366f1", dotStyle: "solid" }, { label: "Profit", color: "#10b981", dotStyle: "solid" }].map(l => (
                      <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6b7280" }}>
                        <span style={{ width: 10, height: 10, borderRadius: 2, background: l.color, display: "inline-block" }} />
                        {l.label}
                      </span>
                    ))}
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={getFilteredChartData()}>
                      <defs>
                        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v / 1000}k`} />
                      <Tooltip formatter={(v, n) => [`₹${v.toLocaleString()}`, n === "revenue" ? "Revenue" : "Profit"]} contentStyle={{ borderRadius: 10, border: "1px solid #e8ecf0", fontSize: 12 }} />
                      <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#revGrad)" />
                      <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2.5} fill="url(#profGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Category Pie */}
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, color: "#111" }}>Sales by Category</h3>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#9ca3af" }}>Current period breakdown</p>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                        {categoryData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(v) => [`${v}%`]} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {categoryData.map(c => (
                      <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color }} />
                          <span style={{ fontSize: 13, color: "#374151" }}>{c.name}</span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{c.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Traffic + Recent Orders */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, color: "#111" }}>Weekly Traffic</h3>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#9ca3af" }}>Visitors vs conversions</p>
                  <div style={{ marginBottom: 12, display: "flex", gap: 14 }}>
                    {[{ label: "Visitors", color: "#6366f1" }, { label: "Conversions", color: "#f59e0b" }].map(l => (
                      <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280" }}>
                        <span style={{ width: 10, height: 10, borderRadius: 2, background: l.color, display: "inline-block" }} />{l.label}
                      </span>
                    ))}
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={weeklyTraffic} barSize={14}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" />
                      <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #e8ecf0", fontSize: 12 }} />
                      <Bar dataKey="visitors" fill="#6366f1" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="conversions" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Quick Recent Orders */}
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#111" }}>Recent Orders</h3>
                    <button onClick={() => setActiveNav("orders")} style={{ fontSize: 13, color: "#6366f1", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>View all →</button>
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {["Order", "Customer", "Product", "Amount", "Status"].map(h => (
                          <th key={h} style={{ textAlign: "left", fontSize: 12, fontWeight: 600, color: "#9ca3af", padding: "0 12px 10px 0", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.slice(0, 5).map(order => {
                        const s = statusColors[order.status];
                        return (
                          <tr key={order.id} style={{ borderTop: "1px solid #f8fafc" }}>
                            <td style={{ padding: "10px 12px 10px 0", fontSize: 13, fontWeight: 600, color: "#6366f1" }}>{order.id}</td>
                            <td style={{ padding: "10px 12px 10px 0" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ width: 28, height: 28, borderRadius: 8, background: avatarColors[order.customer.charCodeAt(0) % avatarColors.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>{order.avatar}</div>
                                <span style={{ fontSize: 13, color: "#374151", whiteSpace: "nowrap" }}>{order.customer.split(" ")[0]}</span>
                              </div>
                            </td>
                            <td style={{ padding: "10px 12px 10px 0", fontSize: 13, color: "#6b7280", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{order.product}</td>
                            <td style={{ padding: "10px 12px 10px 0", fontSize: 13, fontWeight: 600, color: "#111" }}>₹{order.amount.toLocaleString()}</td>
                            <td style={{ padding: "10px 0" }}>
                              <span style={{ background: s.bg, color: s.text, fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 20 }}>{s.label}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── ORDERS ── */}
          {activeNav === "orders" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Orders</h1>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>{filteredOrders.length} orders found</p>
                </div>
                <button onClick={() => showToast("Orders exported!")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, background: "#6366f1", border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#fff" }}>
                  <Download size={15} /> Export Orders
                </button>
              </div>

              {/* Filters */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                {["all", "pending", "processing", "shipped", "delivered", "cancelled"].map(f => (
                  <button key={f} onClick={() => { setOrderFilter(f); setCurrentPage(1); }} style={{ padding: "7px 16px", borderRadius: 20, border: "1.5px solid", borderColor: orderFilter === f ? "#6366f1" : "#e8ecf0", background: orderFilter === f ? "#eef2ff" : "#fff", color: orderFilter === f ? "#6366f1" : "#6b7280", fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize" }}>
                    {f === "all" ? "All Orders" : f}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #f0f4f8", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc" }}>
                      {["Order ID", "Customer", "Product", "Date", "Items", "Amount", "Status", "Actions"].map(h => (
                        <th key={h} style={{ textAlign: "left", fontSize: 12, fontWeight: 600, color: "#9ca3af", padding: "14px 16px", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.length === 0 ? (
                      <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", color: "#9ca3af", fontSize: 14 }}>No orders found</td></tr>
                    ) : paginatedOrders.map(order => {
                      const s = statusColors[order.status];
                      return (
                        <tr key={order.id} style={{ borderTop: "1px solid #f8fafc" }} onMouseEnter={e => e.currentTarget.style.background = "#fafbff"} onMouseLeave={e => e.currentTarget.style.background = ""}>
                          <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 700, color: "#6366f1" }}>{order.id}</td>
                          <td style={{ padding: "14px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{ width: 34, height: 34, borderRadius: 10, background: avatarColors[order.customer.charCodeAt(0) % avatarColors.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>{order.avatar}</div>
                              <div>
                                <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{order.customer}</div>
                                <div style={{ fontSize: 11, color: "#9ca3af" }}>{order.email}</div>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#374151" }}>{order.product}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#6b7280", whiteSpace: "nowrap" }}>{order.date}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#374151", textAlign: "center" }}>{order.items}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 700, color: "#111" }}>₹{order.amount.toLocaleString()}</td>
                          <td style={{ padding: "14px 16px" }}>
                            <span style={{ background: s.bg, color: s.text, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>{s.label}</span>
                          </td>
                          <td style={{ padding: "14px 16px" }}>
                            <div style={{ display: "flex", gap: 6 }}>
                              <button onClick={() => showToast(`Viewing ${order.id}`)} style={{ width: 30, height: 30, borderRadius: 8, background: "#f0f4f8", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Eye size={14} color="#6b7280" /></button>
                              <button onClick={() => showToast(`${order.id} updated!`)} style={{ width: 30, height: 30, borderRadius: 8, background: "#f0f4f8", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Edit2 size={14} color="#6366f1" /></button>
                              <button onClick={() => showToast(`${order.id} deleted!`, "error")} style={{ width: 30, height: 30, borderRadius: 8, background: "#fff0f0", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Trash2 size={14} color="#ef4444" /></button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* Pagination */}
                <div style={{ padding: "14px 16px", borderTop: "1px solid #f0f4f8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>Showing {Math.min((currentPage - 1) * ordersPerPage + 1, filteredOrders.length)}–{Math.min(currentPage * ordersPerPage, filteredOrders.length)} of {filteredOrders.length}</span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid #e8ecf0", background: "#fff", fontSize: 13, cursor: currentPage === 1 ? "default" : "pointer", opacity: currentPage === 1 ? 0.4 : 1 }}>Prev</button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid", borderColor: currentPage === i + 1 ? "#6366f1" : "#e8ecf0", background: currentPage === i + 1 ? "#eef2ff" : "#fff", color: currentPage === i + 1 ? "#6366f1" : "#374151", fontSize: 13, cursor: "pointer", fontWeight: currentPage === i + 1 ? 600 : 400 }}>{i + 1}</button>
                    ))}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid #e8ecf0", background: "#fff", fontSize: 13, cursor: currentPage === totalPages ? "default" : "pointer", opacity: currentPage === totalPages ? 0.4 : 1 }}>Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── PRODUCTS ── */}
          {activeNav === "products" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Products</h1>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>{topProducts.length} products listed</p>
                </div>
                <button onClick={() => setAddProductModal(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, background: "#6366f1", border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#fff" }}>
                  <Plus size={15} /> Add Product
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {topProducts.map(p => (
                  <div key={p.id} style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid #f0f4f8", cursor: "pointer", transition: "box-shadow 0.2s" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.1)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f0f0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Package size={20} color="#6366f1" />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 20, background: p.trend === "up" ? "#f0fdf4" : "#fff0f0", color: p.trend === "up" ? "#10b981" : "#ef4444", display: "flex", alignItems: "center", gap: 3 }}>
                        {p.trend === "up" ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                        {p.trend === "up" ? "Trending" : "Declining"}
                      </span>
                    </div>
                    <h3 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 600, color: "#111" }}>{p.name}</h3>
                    <p style={{ margin: "0 0 14px", fontSize: 12, color: "#9ca3af" }}>{p.category}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                      {[["Price", `₹${p.price.toLocaleString()}`], ["Sold", p.sold.toLocaleString()], ["Revenue", `₹${(p.revenue / 1000).toFixed(0)}k`], ["Stock", p.stock]].map(([k, v]) => (
                        <div key={k} style={{ background: "#f8fafc", borderRadius: 8, padding: "8px 10px" }}>
                          <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2 }}>{k}</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid #f0f4f8" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Star size={13} color="#f59e0b" fill="#f59e0b" />
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{p.rating}</span>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => showToast(`Editing ${p.name}`)} style={{ padding: "5px 12px", borderRadius: 8, background: "#eef2ff", border: "none", color: "#6366f1", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Edit</button>
                        <button onClick={() => showToast(`${p.name} deleted!`, "error")} style={{ padding: "5px 12px", borderRadius: 8, background: "#fff0f0", border: "none", color: "#ef4444", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CUSTOMERS ── */}
          {activeNav === "customers" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Customers</h1>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>Manage your customer base</p>
                </div>
                <button onClick={() => showToast("Customers exported!")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, background: "#6366f1", border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#fff" }}>
                  <Download size={15} /> Export
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {customers.map(c => (
                  <div key={c.id} style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid #f0f4f8" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.1)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: avatarColors[c.name.charCodeAt(0) % avatarColors.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>{c.avatar}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: "#111" }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: "#9ca3af" }}>{c.email}</div>
                      </div>
                      <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 20, background: c.status === "active" ? "#f0fdf4" : "#f8fafc", color: c.status === "active" ? "#10b981" : "#9ca3af" }}>{c.status}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                      {[["Orders", c.orders], ["Spent", `₹${(c.spent / 1000).toFixed(1)}k`], ["Location", c.location]].map(([k, v]) => (
                        <div key={k} style={{ background: "#f8fafc", borderRadius: 8, padding: "8px 10px" }}>
                          <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2 }}>{k}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 8, paddingTop: 12, borderTop: "1px solid #f0f4f8" }}>
                      <button onClick={() => showToast(`Viewing ${c.name}'s profile`)} style={{ flex: 1, padding: "7px", borderRadius: 8, background: "#eef2ff", border: "none", color: "#6366f1", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>View Profile</button>
                      <button onClick={() => showToast(`Email sent to ${c.name}!`)} style={{ flex: 1, padding: "7px", borderRadius: 8, background: "#f0fdf4", border: "none", color: "#10b981", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Send Email</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── ANALYTICS ── */}
          {activeNav === "analytics" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Analytics</h1>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>Detailed performance insights</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, color: "#111" }}>Monthly Orders</h3>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#9ca3af" }}>Order volume per month</p>
                  <div style={{ marginBottom: 12, display: "flex", gap: 14 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280" }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, background: "#8b5cf6", display: "inline-block" }} />Orders
                    </span>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                      <Bar dataKey="orders" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, color: "#111" }}>Revenue vs Profit</h3>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#9ca3af" }}>Monthly comparison</p>
                  <div style={{ marginBottom: 12, display: "flex", gap: 14 }}>
                    {[{ label: "Revenue", color: "#6366f1" }, { label: "Profit", color: "#10b981" }].map(l => (
                      <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280" }}>
                        <span style={{ width: 10, height: 10, borderRadius: 2, background: l.color, display: "inline-block" }} />{l.label}
                      </span>
                    ))}
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v / 1000}k`} />
                      <Tooltip formatter={v => `₹${v.toLocaleString()}`} contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                      <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} dot={false} />
                      <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2.5} dot={false} strokeDasharray="5 3" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #f0f4f8" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, color: "#111" }}>Top Products Performance</h3>
                <p style={{ margin: "0 0 20px", fontSize: 13, color: "#9ca3af" }}>Revenue by product</p>
                {topProducts.map((p, i) => {
                  const maxRev = topProducts[0].revenue;
                  const pct = (p.revenue / maxRev) * 100;
                  return (
                    <div key={p.id} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{p.name}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>₹{(p.revenue / 1000).toFixed(0)}k</span>
                      </div>
                      <div style={{ height: 8, background: "#f0f4f8", borderRadius: 20, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, #6366f1, #8b5cf6)`, borderRadius: 20, transition: "width 0.8s ease" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── INVENTORY ── */}
          {activeNav === "inventory" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111" }}>Inventory</h1>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "#9ca3af" }}>Stock levels and management</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
                {[
                  { label: "Total Products", value: inventoryData.reduce((s, d) => s + d.total, 0).toLocaleString(), color: "#6366f1", bg: "#eef2ff" },
                  { label: "In Stock", value: inventoryData.reduce((s, d) => s + d.inStock, 0).toLocaleString(), color: "#10b981", bg: "#f0fdf4" },
                  { label: "Low Stock", value: inventoryData.reduce((s, d) => s + d.lowStock, 0).toLocaleString(), color: "#f59e0b", bg: "#fffbeb" },
                  { label: "Out of Stock", value: inventoryData.reduce((s, d) => s + d.outOfStock, 0).toLocaleString(), color: "#ef4444", bg: "#fff0f0" },
                  { label: "Categories", value: inventoryData.length, color: "#8b5cf6", bg: "#f5f3ff" },
                  { label: "Reorder Needed", value: "47", color: "#06b6d4", bg: "#ecfeff" },
                ].map(s => (
                  <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #f0f4f8" }}>
                    <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 6 }}>{s.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #f0f4f8", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc" }}>
                      {["Category", "Total", "In Stock", "Low Stock", "Out of Stock", "Stock Health", "Action"].map(h => (
                        <th key={h} style={{ textAlign: "left", fontSize: 12, fontWeight: 600, color: "#9ca3af", padding: "14px 16px", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map(row => {
                      const healthPct = Math.round((row.inStock / row.total) * 100);
                      const color = healthPct > 75 ? "#10b981" : healthPct > 50 ? "#f59e0b" : "#ef4444";
                      return (
                        <tr key={row.category} style={{ borderTop: "1px solid #f8fafc" }}>
                          <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 600, color: "#111" }}>{row.category}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#374151" }}>{row.total.toLocaleString()}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#10b981", fontWeight: 600 }}>{row.inStock.toLocaleString()}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#f59e0b", fontWeight: 600 }}>{row.lowStock}</td>
                          <td style={{ padding: "14px 16px", fontSize: 13, color: "#ef4444", fontWeight: 600 }}>{row.outOfStock}</td>
                          <td style={{ padding: "14px 16px", minWidth: 120 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ flex: 1, height: 6, background: "#f0f4f8", borderRadius: 20, overflow: "hidden" }}>
                                <div style={{ height: "100%", width: `${healthPct}%`, background: color, borderRadius: 20 }} />
                              </div>
                              <span style={{ fontSize: 12, fontWeight: 600, color, minWidth: 32 }}>{healthPct}%</span>
                            </div>
                          </td>
                          <td style={{ padding: "14px 16px" }}>
                            <button onClick={() => showToast(`Restocking ${row.category}!`)} style={{ padding: "5px 14px", borderRadius: 8, background: "#eef2ff", border: "none", color: "#6366f1", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Restock</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
