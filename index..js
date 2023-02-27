export const myName="Thurein Zaw";
export const  showMyName =() => {
    return myName;
};
export const showMyNameUi=() => {
    const h1=document.createElement("h1");
    h1.innerText=myName;
    document.body.append(h1);
    
};
