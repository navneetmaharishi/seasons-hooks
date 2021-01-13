import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error';
import useLocation from './useLocation';

const App = () => {

    const [lat, errorMsg] = useLocation();

    let content;
    if (errorMsg) {
        content = <Error msg={errorMsg} />;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Loader msg='Please accept location request' />;
    }

    return <div className="border red">{content}</div>
};

ReactDOM.render(<App />, document.querySelector('#root'));