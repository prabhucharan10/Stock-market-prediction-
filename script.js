    box-sizing: border-box;
}
:root {
    /* Color Palette */
    --primary-blue: #1e40af;
    --primary-blue-light: #3b82f6;
    --primary-blue-dark: #1e3a8a;
    --secondary-purple: #7c3aed;
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-orange: #f59e0b;
    
    /* Background Colors */
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-card: #1e293b;
    --bg-hover: #334155;
    
    /* Text Colors */
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --text-inverse: #0f172a;
    
    /* Border & Shadow */
    --border-color: #334155;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    
    /* Typography */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
}
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #0f1419;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
}
/* Navigation */
.navbar {
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    padding: var(--spacing-md) 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
}
.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-xl);
    display: flex;
    align-items: center;
/* Dashboard Container */
.dashboard-container {
    display: flex;
    height: 100vh;
    background: #0f1419;
}
/* Sidebar */
.sidebar {
    width: 240px;
    background: #1a1f29;
    border-right: 1px solid #2a3441;
    display: flex;
    flex-direction: column;
}
.sidebar-header {
    padding: 20px;
    border-bottom: 1px solid #2a3441;
}
.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}
.logo i {
    font-size: 24px;
    color: #ff4444;
}
.logo-text {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
}
.sidebar-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.nav-brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}
.brand-icon {
    font-size: var(--font-size-2xl);
    color: var(--primary-blue-light);
}
.brand-text {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--text-primary);
}
.nav-menu {
    display: flex;
    gap: var(--spacing-lg);
}
.nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-md);
    padding: 20px 0;
}
.nav-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 20px;
}
.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
}
.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
    background: var(--bg-hover);
}
.nav-user {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}
.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.user-name {
    font-weight: 600;
    color: var(--text-primary);
    font-size: var(--font-size-sm);
}
.user-role {
    color: var(--text-muted);
    font-size: var(--font-size-xs);
}
.profile-pic {
    color: #8b9dc3;
}
.nav-item:hover,
.nav-item.active {
    background: #2a3441;
    color: #ffffff;
}
.nav-item.active {
    background: #ff4444;
}
.nav-item i {
    width: 20px;
    font-size: 16px;
}
.user-profile {
    padding: 20px;
    border-top: 1px solid #2a3441;
    display: flex;
    align-items: center;
    gap: 12px;
}
.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-blue-light);
    background: #ff4444;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
.user-info {
    display: flex;
    flex-direction: column;
}
.username {
    font-weight: 600;
    color: #ffffff;
    font-size: 14px;
}
.user-role {
    font-size: 12px;
    color: #8b9dc3;
}
/* Main Content */
.main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-xl);
}
/* Sections */
section {
    display: none;
    animation: fadeIn 0.3s ease-in-out;
}
section.active {
    display: block;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
/* Dashboard */
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #0f1419;
}
/* Header */
.dashboard-header {
    display: flex;
    height: 70px;
    background: #1a1f29;
    border-bottom: 1px solid #2a3441;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: var(--spacing-2xl);
}
.page-title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
}
.page-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-size-lg);
}
.dashboard-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}
.time-range {
    display: flex;
    background: var(--bg-card);
    border-radius: var(--radius-md);
    padding: 4px;
    border: 1px solid var(--border-color);
}
.time-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    padding: 0 24px;
}
.header-left {
    display: flex;
    align-items: center;
}
.search-bar {
    position: relative;
    width: 300px;
}
.search-bar i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #8b9dc3;
    font-size: 14px;
}
.search-bar input {
    width: 100%;
    height: 40px;
    background: #2a3441;
    border: 1px solid #3a4553;
    border-radius: 8px;
    padding: 0 16px 0 44px;
    color: #ffffff;
    font-size: 14px;
}
.search-bar input::placeholder {
    color: #8b9dc3;
}
.search-bar input:focus {
    outline: none;
    border-color: #ff4444;
}
.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}
.header-controls {
    display: flex;
    gap: 8px;
}
.control-btn {
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    color: var(--text-secondary);
    border-radius: 6px;
    color: #8b9dc3;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}
.control-btn:hover {
    background: #2a3441;
    color: #ffffff;
}
.user-menu {
    display: flex;
    align-items: center;
    gap: 12px;
}
.user-name {
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    border-radius: var(--radius-sm);
}
/* Dashboard Content */
.dashboard-content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
/* Section Styles */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.section-header h2 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
}
.section-controls {
    display: flex;
    align-items: center;
    gap: 16px;
}
.show-all-btn {
    background: none;
    border: none;
    color: #ff4444;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    padding: 8px 0;
}
.show-all-btn:hover {
    text-decoration: underline;
}
.chart-controls {
    display: flex;
    gap: 4px;
}
.chart-control-btn {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    border-radius: 6px;
    color: #8b9dc3;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}
.time-btn.active,
.time-btn:hover {
    background: var(--primary-blue-light);
    color: white;
}
.refresh-btn {
    padding: var(--spacing-sm);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
}
.refresh-btn:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
}
/* Overview Cards */
.overview-cards {
.chart-control-btn:hover,
.chart-control-btn.active {
    background: #2a3441;
    color: #ffffff;
}
/* Active Stocks Section */
.active-stocks {
    background: #1a1f29;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #2a3441;
}
.chart-container {
    position: relative;
    height: 400px;
    background: #0f1419;
    border-radius: 8px;
    padding: 20px;
}
.chart-legend {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}
.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
}
.legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
}
.legend-text {
    font-size: 13px;
    color: #8b9dc3;
    font-weight: 500;
}
/* Recent Stocks Section */
.recent-stocks {
    background: #1a1f29;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #2a3441;
}
.stocks-table {
    background: #0f1419;
    border-radius: 8px;
    overflow: hidden;
}
.table-header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}
.overview-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}
.overview-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
.overview-card.nifty {
    border-left: 4px solid var(--primary-blue-light);
}
.overview-card.sensex {
    border-left: 4px solid var(--secondary-purple);
}
.overview-card.volume {
    border-left: 4px solid var(--accent-green);
}
.overview-card.volatility {
    border-left: 4px solid var(--accent-orange);
}
.card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}
.card-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
}
.nifty .card-icon {
    background: rgba(59, 130, 246, 0.1);
    color: var(--primary-blue-light);
}
.sensex .card-icon {
    background: rgba(124, 58, 237, 0.1);
    color: var(--secondary-purple);
}
.volume .card-icon {
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent-green);
}
.volatility .card-icon {
    background: rgba(245, 158, 11, 0.1);
    color: var(--accent-orange);
}
.card-title h3 {
    font-size: var(--font-size-lg);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1.2fr;
    background: #2a3441;
    padding: 16px 20px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2px;
}
.card-subtitle {
    font-size: var(--font-size-xs);
    color: var(--text-muted);
    font-size: 13px;
    color: #8b9dc3;
    text-transform: uppercas...
[truncated]
[truncated]
[truncated]
-1
+1
[truncated]
[truncated]
