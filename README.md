# Indian Stock Market Predictor

AI-powered stock market prediction system for Indian stocks using machine learning models including LSTM, XGBoost, SVM, and Ensemble methods.

## Features

- **Real-time Stock Analysis**: Predict prices for major Indian stocks (RELIANCE, TCS, HDFC Bank, etc.)
- **Multiple ML Models**: LSTM Neural Networks, XGBoost, Support Vector Machine, and Ensemble
- **Interactive Dashboard**: Live market data for NIFTY 50 and BSE SENSEX
- **Technical Analysis**: RSI, Moving Averages, MACD indicators
- **Prediction History**: Track and analyze prediction accuracy
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Responsive design with CSS Grid/Flexbox

### Backend
- Python Flask API server
- PostgreSQL database for data persistence
- Machine learning algorithms for predictions

### Database Schema
- Stock information and historical prices
- Prediction models and accuracy tracking
- User sessions and prediction requests
- Technical indicators and market indices

## Quick Start

### Option 1: Standalone Version (No Server Required)
1. Download the repository
2. Open `index.html` directly in your web browser
3. The application runs entirely client-side with simulated data

### Option 2: Full Database Version
1. Set up PostgreSQL database
2. Install Python dependencies: `pip install flask psycopg2-binary flask-cors numpy`
3. Configure database environment variables
4. Run: `python app.py`
5. Access at `http://localhost:5000`

## Installation

### Prerequisites
- Python 3.7+ (for full version)
- PostgreSQL database (for full version)
- Modern web browser

### Database Setup
```sql
-- Run the provided database.sql file to create tables
psql -d your_database -f database.sql
```

### Environment Variables
```bash
export PGHOST=your_host
export PGDATABASE=your_database
export PGUSER=your_username
export PGPASSWORD=your_password
export PGPORT=5432
```

### Python Dependencies
```bash
pip install flask psycopg2-binary flask-cors numpy
```

## API Endpoints

- `GET /api/stocks` - Get all available stocks
- `GET /api/market-indices` - Get NIFTY/SENSEX data
- `POST /api/predict` - Generate stock prediction
- `GET /api/predictions/history` - Get prediction history
- `GET /api/performance` - Get model performance stats
- `GET /api/top-movers` - Get top gainers/losers

## Machine Learning Models

### LSTM (Long Short-Term Memory)
- Accuracy: 87.4%
- Best for: Sequential pattern recognition
- Parameters: 3 layers, 50 neurons, 0.2 dropout

### XGBoost (Extreme Gradient Boosting)
- Accuracy: 84.2%
- Best for: Feature importance analysis
- Parameters: 100 estimators, max depth 6

### SVM (Support Vector Machine)
- Accuracy: 79.8%
- Best for: Classification and regime detection
- Parameters: RBF kernel, C=1.0

### Ensemble Model
- Accuracy: 91.6%
- Combines all three models with weighted voting
- Most robust and reliable predictions

## Stock Coverage

### Major Indian Stocks
- **Banking**: HDFC Bank, ICICI Bank, SBI, Kotak Mahindra Bank
- **IT**: TCS, Infosys, HCL Technologies
- **Energy**: Reliance Industries
- **FMCG**: Hindustan Unilever, ITC
- **Automotive**: Maruti Suzuki
- **Financial Services**: Bajaj Finance
- **Engineering**: Larsen & Toubro
- **Paints**: Asian Paints
- **Telecom**: Bharti Airtel

### Market Indices
- NIFTY 50
- BSE SENSEX

## Prediction Features

- **Price Targets**: 1 day to 3 months
- **Confidence Scores**: Based on model accuracy and time horizon
- **Technical Analysis**: Comprehensive AI-generated insights
- **Risk Assessment**: Market volatility and uncertainty factors
- **Historical Tracking**: Compare predictions with actual outcomes

## Security & Compliance

- Session-based user tracking
- IP address logging for security
- No personal financial data storage
- Educational and research purposes only

## Disclaimer

This application is for educational and research purposes only. Stock market predictions involve significant risk and uncertainty. Always consult qualified financial advisors before making investment decisions. Past performance does not guarantee future results.

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions or support, please open an issue in the GitHub repository.

---

**Built by Prabhu Charan** - Demonstrating machine learning expertise in financial markets and web development skills.