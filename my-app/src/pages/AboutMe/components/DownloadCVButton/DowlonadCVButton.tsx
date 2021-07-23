import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DownloadCVButton.css';

const DownloadCVButton = () => {
  return (
    <section className='section__download-cv'>
      <FontAwesomeIcon icon={faFileDownload} size='4x' color='black' />
      <a href='CV.pdf' download target='_blank' className='button__download-cv'>
        <label className='label__download-cv'>Download my CV</label>
      </a>
    </section>
  );
};

export default DownloadCVButton;
