import axios from "axios";

export const newStories = 'https://hacker-news.firebaseio.com/v0/newstories.json';

export const story = 'https://hacker-news.firebaseio.com/v0/item/';

export const estrazione = async (link) => {
    let api = await axios.get(link).then(({data}) => data);
    try {
        if (typeof api !== 'undefined')
            return api;
        else
            console.log('Api don\'t exist');
    } catch (error) {
        console.error(error)
    }
};
