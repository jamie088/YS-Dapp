import React from 'react';
import Privacy from './PrivacyPolicy.html';

function iframe() {
    return {
        __html: '<iframe src={Privacy} width="540" height="450"></iframe>'
    };
};

export default function Private() {
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>
    );
}