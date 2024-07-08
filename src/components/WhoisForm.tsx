import React, { useState } from 'react';

interface WhoisFormProps {
  onSearch: (domain: string, infoType: string) => void;
}

const WhoisForm: React.FC<WhoisFormProps> = ({ onSearch }) => {
  const [domain, setDomain] = useState('');
  const [infoType, setInfoType] = useState('domain');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(domain, infoType);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 whois-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter domain name"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="infoType" className="form-label">Select Information Type:</label>
        <select
          id="infoType"
          className="form-select"
          value={infoType}
          onChange={(e) => setInfoType(e.target.value)}
        >
          <option value="domain">Domain Information</option>
          <option value="contact">Contact Information</option>
          <option value="both">Both</option>
        </select>
      </div>
    </form>
  );
};

export default WhoisForm;