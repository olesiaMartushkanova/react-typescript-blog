import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MEDIA_QUERY_SIZE } from '../../../../utils/constants';
import { useMediaQueryHook } from '../../../../utils/hooks/useMediaQuery';
import './DownloadCVButton.css';

const DownloadCVButton = () => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);

  const setIconSize = isPageWide ? '4x' : '2x';

  return (
    <section className='section__download-cv'>
      <FontAwesomeIcon icon={faFileDownload} size={setIconSize} color='black' />
      <a href='CV.pdf' download target='_blank' className='button__download-cv'>
        <label className='label__download-cv'>Download my CV</label>
      </a>
    </section>
  );
};

export default DownloadCVButton;
