import React, { useState } from 'react';
import axios from 'axios';
import LandingSection from './components/LandingSection';
import WhoisForm from './components/WhoisForm';
import WhoisResult from './components/WhoisResult';
import '../src/components/custom.scss';
import Footer from '../src/components/Footer'

const App: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const [infoType, setInfoType] = useState('domain');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (domain: string, infoType: string) => {
    const url = process.env.REACT_APP_WHOIS_URL as string;
    const apiKey = process.env.REACT_APP_API_KEY as string;
    setInfoType(infoType);

    try {
      const response = await axios.get(url, {
        params: {
          domainName: domain,
          apiKey: apiKey,
          outputFormat: 'JSON',
        },
      });

      setResult(response.data.WhoisRecord);
      setError(null);
    } catch (error) {
      console.error('Error fetching WHOIS data:', error);
      setResult(null);
      setError('Error fetching WHOIS data. Please try again later.');
    }
  };

  return (
    <div>
      <LandingSection />
      <div id='second-section' className="container mt-5">
          <h1 className="mb-4 section-title">Input Your Domain Below!</h1>
          <WhoisForm onSearch={handleSearch} />
          {error && <div className="alert alert-danger">{error}</div>}
            <WhoisResult result={result} infoType={infoType} />
      </div>
      <Footer />
    </div>
    
  );
};

export default App;