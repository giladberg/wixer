import WebsiteService from '../services/WebsiteService';

function _addWebsite(website) {
    return {
        type: 'WEBSITE_ADD',
        website
    };
}
function _setWebsite(website) {
    return {
        type: 'WEBSITE_SET',
        website
    };
}

function _clearWebsite() {
    return {
        type: 'WEBSITE_CLEAR',
    };
}

function _changeBg() {
    return {
        type: 'SET_BG',
    }
}

export function addWebsite() {
    return async dispatch => {
        try {
            const addedWebsite = await WebsiteService.add();
            dispatch(_addWebsite(addedWebsite));
            dispatch(_setWebsite(addedWebsite));
        } catch (err) {
            console.log('WebsiteActions: err in addWebsite', err);
        }
    };
}


export function clearCmps() {
    return async dispatch => {
        try {
            //  await WebsiteService.clear();
            dispatch(_clearWebsite());
        } catch (err) {
            console.log('WebsiteActions:err in clearCmps', err);
        }
    }
}

export function changeBg() {
    return async dispatch => {
        try {
            dispatch(_changeBg());
        } catch (err) {
            console.log('WebsiteActions:err in clearCmps', err);
        }
    }
}