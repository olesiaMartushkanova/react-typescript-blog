import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DownloadCVButton.css';

const DownloadCVButton = () => {
  return (
    <div className='downloadCVContainer'>
      <a href='CV.pdf' download target='_blank' className='downloadCVButton'>
        <FontAwesomeIcon icon={faFileDownload} size='3x' />
        <label className='downloadCVLabel'>Download my CV</label>
      </a>
    </div>
  );
};

export default DownloadCVButton;
