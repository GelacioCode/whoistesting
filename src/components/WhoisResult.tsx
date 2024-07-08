import React, { useState } from 'react';

interface WhoisResultProps {
  result: any;
  infoType: string;
}

const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length - 3) + '...' : str;
};

const WhoisResult: React.FC<WhoisResultProps> = ({ result, infoType }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  if (!result) return null;

  const handleShowModal = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const domainInfo = (
    <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <thead className="table-dark">
          <tr>
            <th>Domain Name</th>
            <th>Registrar</th>
            <th>Registration Date</th>
            <th>Expiration Date</th>
            <th>Estimated Domain Age</th>
            <th>Hostnames</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.domainName || 'N/A'}</td>
            <td>{result.registrarName || 'N/A'}</td>
            <td>{result.createdDate || 'N/A'}</td>
            <td>{result.expiresDate || 'N/A'}</td>
            <td>{result.estimatedDomainAge || 'N/A'}</td>
            <td>
              {result.nameServers?.hostNames ? (
                <span
                  className="hostname-truncate"
                  onClick={() => handleShowModal(result.nameServers.hostNames.join(', '))}
                >
                  {truncate(result.nameServers.hostNames.join(', '), 25)}
                </span>
              ) : (
                'N/A'
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const contactInfo = (
    <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <thead className="table-dark">
          <tr>
            <th>Registrant Name</th>
            <th>Technical Contact Name</th>
            <th>Administrative Contact Name</th>
            <th>Contact Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.registrant?.name || 'N/A'}</td>
            <td>{result.technicalContact?.name || 'N/A'}</td>
            <td>{result.administrativeContact?.name || 'N/A'}</td>
            <td>{result.contactEmail || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {infoType === 'domain' && domainInfo}
      {infoType === 'contact' && contactInfo}
      {infoType === 'both' && (
        <>
          {domainInfo}
          {contactInfo}
        </>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>&times;</span>
            <h2>Hostnames</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhoisResult;
