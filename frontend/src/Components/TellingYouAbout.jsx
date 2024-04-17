import PropTypes from 'prop-types';

const TellingYouAbout = (props) => {

  if (!props) {
    return
  } 

  return (
    <>
        <div className="d-flex flex-column align-items-center">
            <div className="container my-5">
                <h2 className="text-center">Telling you about....</h2>
                <h2 className="text-center">{props.description}</h2>
            </div>
        </div>
    </>
  );
};

TellingYouAbout.propTypes = {
  description: PropTypes.string
}

export default TellingYouAbout
