  // Stock Market Dashboard JavaScript

class StockDashboard {
    constructor() {
        this.stockData = {
            'AAPL': { name: 'Apple Inc.', currentPrice: 149.79, open: 148.50, high: 151.20, low: 148.10, close: 149.79, adjClose: 149.79, volume: '78050600' },
            'AMZN': { name: 'Amazon.com Inc.', currentPrice: 112.50, open: 111.85, high: 115.58, low: 111.50, close: 112.50, adjClose: 112.50, volume: '83891100' },
            'GOOGL': { name: 'Alphabet Inc.', currentPrice: 119.65, open: 118.90, high: 121.34, low: 118.45, close: 119.65, adjClose: 119.65, volume: '46210600' },
            'META': { name: 'Meta Platforms Inc.', currentPrice: 310.50, open: 308.75, high: 315.76, low: 307.20, close: 310.50, adjClose: 310.50, volume: '24481100' },
            'NVDA': { name: 'NVIDIA Corporation', currentPrice: 720.10, open: 715.50, high: 730.86, low: 712.30, close: 720.10, adjClose: 720.10, volume: '23165600' },
            'TSLA': { name: 'Tesla Inc.', currentPrice: 245.60, open: 242.80, high: 248.90, low: 241.50, close: 245.60, adjClose: 245.60, volume: '45620800' }
        };

        this.indianStocks = {
            'RELIANCE': { name: 'Reliance Industries', currentPrice: 2456.75, open: 2445.20, high: 2468.90, low: 2441.15, close: 2456.75, adjClose: 2456.75, volume: '15.2M' },
            'TCS': { name: 'Tata Consultancy Services', currentPrice: 3567.20, open: 3545.80, high: 3578.45, low: 3540.30, close: 3567.20, adjClose: 3567.20, volume: '8.7M' },
            'HDFCBANK': { name: 'HDFC Bank', currentPrice: 1634.85, open: 1628.90, high: 1642.50, low: 1625.75, close: 1634.85, adjClose: 1634.85, volume: '22.1M' },
            'INFY': { name: 'Infosys', currentPrice: 1456.90, open: 1449.25, high: 1465.80, low: 1446.50, close: 1456.90, adjClose: 1456.90, volume: '12.3M' },
            'HINDUNILVR': { name: 'Hindustan Unilever', currentPrice: 2387.45, open: 2375.60, high: 2395.20, low: 2372.10, close: 2387.45, adjClose: 2387.45, volume: '5.8M' }
        };

        this.charts = {};
        this.init();
    }

    init() {
        this.createActiveStocksChart();
        this.populateStocksTable();
        this.setupEventListeners();
        this.updateMarketData();
        
        // Update data every 30 seconds
        setInterval(() => {
            this.updateMarketData();
            this.updateActiveStocksChart();
        }, 30000);
    }

    createActiveStocksChart() {
        const ctx = document.getElementById('activeStocksChart');
        if (!ctx) return;

        // Generate sample data for multiple stocks over time
        const labels = this.generateTimeLabels();
        const datasets = this.generateStockDatasets(labels);

        this.charts.activeStocks = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: '#2a3441',
                            borderColor: '#2a3441'
                        },
                        ticks: {
                            color: '#8b9dc3',
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            color: '#2a3441',
                            borderColor: '#2a3441'
                        },
                        ticks: {
                            color: '#8b9dc3',
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 4
                    },
                    line: {
                        borderWidth: 2,
                        tension: 0.1
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    generateTimeLabels() {
        const labels = [];
        const now = new Date();
        
        for (let i = 13; i >= 0; i--) {
            const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
            labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        }
        
        return labels;
    }

    generateStockDatasets(labels) {
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
        const stocks = ['AAPL', 'AMZN', 'GOOGL', 'META', 'NVDA', 'TSLA'];
        
        return stocks.map((stock, index) => {
            const basePrice = this.stockData[stock].currentPrice;
            const data = [];
            
            // Generate realistic price movement
            let currentPrice = basePrice * 0.95; // Start 5% lower
            
            for (let i = 0; i < labels.length; i++) {
                const volatility = 0.03; // 3% daily volatility
                const trend = 0.001; // Slight upward trend
                const change = (Math.random() - 0.5) * volatility + trend;
                currentPrice = currentPrice * (1 + change);
                data.push(parseFloat(currentPrice.toFixed(2)));
            }
            
            return {
                label: stock,
                data: data,
                borderColor: colors[index],
                backgroundColor: colors[index] + '20',
                fill: false
            };
        });
    }

    populateStocksTable() {
        const tableBody = document.getElementById('stocksTableBody');
        if (!tableBody) return;

        const allStocks = { ...this.stockData, ...this.indianStocks };
        
        tableBody.innerHTML = '';
        
        Object.entries(allStocks).forEach(([ticker, data]) => {
            const row = document.createElement('div');
            row.className = 'table-row';
            
            row.innerHTML = `
                <div class="table-cell ticker-cell">${ticker}</div>
                <div class="table-cell price-cell">${this.formatPrice(data.open)}</div>
                <div class="table-cell price-cell">${this.formatPrice(data.high)}</div>
                <div class="table-cell price-cell">${this.formatPrice(data.low)}</div>
                <div class="table-cell price-cell">${this.formatPrice(data.close)}</div>
                <div class="table-cell price-cell">${this.formatPrice(data.adjClose)}</div>
                <div class="table-cell volume-cell">${data.volume}</div>
            `;
            
            tableBody.appendChild(row);
        });
    }

    formatPrice(price) {
        if (typeof price === 'string') return price;
        return price >= 1000 ? `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
                            : `$${price.toFixed(2)}`;
    }

    updateMarketData() {
        // Simulate real-time market data updates
        const indices = [
            { id: 'niftyValue', baseValue: 19674.25 },
            { id: 'sensexValue', baseValue: 65953.48 }
        ];

        indices.forEach(index => {
            const element = document.getElementById(index.id);
            if (element) {
                const variation = (Math.random() - 0.5) * 100; // ±50 points variation
                const newValue = index.baseValue + variation;
                element.textContent = newValue.toLocaleString('en-IN', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                });
            }
        });

        // Update stock prices
        Object.keys(this.stockData).forEach(ticker => {
            const variation = (Math.random() - 0.5) * 0.04; // ±2% variation
            this.stockData[ticker].currentPrice *= (1 + variation);
        });

        Object.keys(this.indianStocks).forEach(ticker => {
            const variation = (Math.random() - 0.5) * 0.04; // ±2% variation
            this.indianStocks[ticker].currentPrice *= (1 + variation);
        });
    }

    updateActiveStocksChart() {
        if (!this.charts.activeStocks) return;

        // Add new data point and remove oldest
        const chart = this.charts.activeStocks;
        const now = new Date();
        const newLabel = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        chart.data.labels.push(newLabel);
        chart.data.labels.shift();

        chart.data.datasets.forEach((dataset, index) => {
            const stockTicker = ['AAPL', 'AMZN', 'GOOGL', 'META', 'NVDA', 'TSLA'][index];
            const currentPrice = this.stockData[stockTicker].currentPrice;
            const lastPrice = dataset.data[dataset.data.length - 1];
            const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
            const newPrice = lastPrice * (1 + variation);
            
            dataset.data.push(parseFloat(newPrice.toFixed(2)));
            dataset.data.shift();
        });

        chart.update('none');
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterStocks(e.target.value);
            });
        }

        // Navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Chart control buttons
        document.querySelectorAll('.chart-control-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.chart-control-btn').forEach(control => control.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Mover tabs (if they exist)
        document.querySelectorAll('.mover-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                document.querySelectorAll('.mover-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.mover-list').forEach(list => list.classList.remove('active'));
                
                tab.classList.add('active');
                const targetList = document.getElementById(tabName);
                if (targetList) targetList.classList.add('active');
            });
        });

        // Time range buttons
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-btn').forEach(timeBtn => timeBtn.classList.remove('active'));
                btn.classList.add('active');
                this.updateChartTimeRange(btn.dataset.range);
            });
        });
    }

    filterStocks(query) {
        const rows = document.querySelectorAll('.table-row');
        rows.forEach(row => {
            const ticker = row.querySelector('.ticker-cell').textContent.toLowerCase();
            const shouldShow = ticker.includes(query.toLowerCase());
            row.style.display = shouldShow ? 'grid' : 'none';
        });
    }

    updateChartTimeRange(range) {
        // Update chart based on selected time range
        let dataPoints;
        switch(range) {
            case '1D': dataPoints = 24; break;
            case '1W': dataPoints = 7; break;
            case '1M': dataPoints = 30; break;
            case '3M': dataPoints = 90; break;
            default: dataPoints = 14;
        }

        const labels = this.generateTimeLabels(dataPoints);
        const datasets = this.generateStockDatasets(labels);
        
        this.charts.activeStocks.data.labels = labels;
        this.charts.activeStocks.data.datasets = datasets;
        this.charts.activeStocks.update();
    }
}

// AI Prediction Function
function generatePrediction() {
    const stockSelect = document.getElementById('predictionStock');
    const resultsDiv = document.getElementById('predictionResults');
    const currentPriceEl = document.getElementById('currentPrice');
    const predictedPriceEl = document.getElementById('predictedPrice');
    const priceChangeEl = document.getElementById('priceChange');
    const confidenceEl = document.getElementById('confidence');

    if (!stockSelect || !resultsDiv) return;

    const selectedStock = stockSelect.value;
    const dashboard = window.stockDashboard;
    
    if (!dashboard || !dashboard.indianStocks[selectedStock]) return;

    const stockData = dashboard.indianStocks[selectedStock];
    const currentPrice = stockData.currentPrice;
    
    // Generate realistic prediction
    const volatility = 0.15; // 15% potential change
    const trend = (Math.random() - 0.4) * volatility; // Slight bullish bias
    const predictedPrice = currentPrice * (1 + trend);
    const changePercent = ((predictedPrice - currentPrice) / currentPrice) * 100;
    const confidence = Math.random() * 20 + 75; // 75-95% confidence

    // Update UI
    currentPriceEl.textContent = `₹${currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    predictedPriceEl.textContent = `₹${predictedPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    priceChangeEl.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
    priceChangeEl.className = `pred-value ${changePercent >= 0 ? 'change-positive' : 'change-negative'}`;
    
    confidenceEl.textContent = `${confidence.toFixed(1)}%`;

    // Show results with animation
    resultsDiv.style.display = 'block';
    resultsDiv.style.opacity = '0';
    resultsDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultsDiv.style.transition = 'all 0.3s ease';
        resultsDiv.style.opacity = '1';
        resultsDiv.style.transform = 'translateY(0)';
    }, 10);
}

// Refresh data function
function refreshData() {
    if (window.stockDashboard) {
        window.stockDashboard.updateMarketData();
        window.stockDashboard.updateActiveStocksChart();
        window.stockDashboard.populateStocksTable();
    }
    
    // Visual feedback
    const refreshBtn = document.querySelector('.refresh-btn i');
    if (refreshBtn) {
        refreshBtn.style.animation = 'spin 1s linear';
        setTimeout(() => {
            refreshBtn.style.animation = '';
        }, 1000);
    }
}

// Mobile sidebar toggle
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// Fullscreen function
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// CSS Animation for spin
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.stockDashboard = new StockDashboard();
    
    // Add mobile menu toggle for responsive design
    if (window.innerWidth <= 768) {
        const header = document.querySelector('.dashboard-header');
        if (header) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'control-btn mobile-menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.onclick = toggleSidebar;
            header.querySelector('.header-left').prepend(menuBtn);
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.stockDashboard && window.stockDashboard.charts.activeStocks) {
        window.stockDashboard.charts.activeStocks.resize();
    }
});

// Export functions for global access
window.generatePrediction = generatePrediction;
window.refreshData = refreshData;
window.toggleSidebar = toggleSidebar;
window.toggleFullscreen = toggleFullscreen;
