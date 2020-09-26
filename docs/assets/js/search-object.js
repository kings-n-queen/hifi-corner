function searchObject(searchString, obj){
    searchString = searchString.toLowerCase();
    for (let i = 0; i < Object.keys(obj).length; i++) {
        const key = Object.keys(obj)[i];
        let value = obj[key];
        if (key === "additionalInformations") {
            for (let i = 0; i < Object.keys(value).length; i++) {
                const descKey = Object.keys(value)[i];
                let descValue = value[descKey];
                if (descValue.toLowerCase().includes(searchString)) {
                    return true;
                }
            }
        }
        if (key === "description") {
            for (let i = 0; i < value.length; i++) {
                const description = value[i];
                if (description.value.toLowerCase().includes(searchString)) {
                    return true;
                }
                // for (let i = 0; i < Object.keys(description).length; i++) {
                //     const descKey = Object.keys(description)[i];
                //     let descValue = description[descKey];
                //     if (descValue.toLowerCase().includes(searchString)) {
                //         return true;
                //     }
                // }
            }
        } else {
            if (typeof value == "string" && value.toLowerCase().includes(searchString)) {
                return true;
            }
        }
    }
}
export default searchObject;