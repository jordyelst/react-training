import React, {Component} from 'react';

export default class Shibes extends Component {
    //TODO 6: BONUS, I found this weird API online that returns URLs of pictures of Shiba Inu's, so I figured, why not use it during this training
    // The API can be found here: http://shibe.online/api/shibes?count=1&urls=true
    // Goal is to create a fully functional React component here with these requirements:
    // - Displays a picture of a Shiba Inu when App is first loaded, AKA when it this component is mounted (Lifecycle methods)
    // - Has a button available that fetches a new picture and then triggers a re-render
    // - It does this using Redux
    // - It does all this in a new reducer file, a new action file and a new saga file. Do note that the reducer and saga will have to be added to root.reducer.js and root.saga.js respectively
    // - Bonus: Can you display three pictures next to each other and fetch 3 new ones on each button click?
    render() {
        return <div className={'cmp-shibes-list'}>
            <img src={''} />
            <img src={''} />
            <img src={''} />
        </div>
    }
};