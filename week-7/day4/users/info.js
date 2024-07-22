
export const getUsers = async(url, options) => {
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(e){
        console.log(e);
    }
};

