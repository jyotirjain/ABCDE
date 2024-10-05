function checkstring(string) {
    try{
    if (string === 'yes') {
        return true;
    }
    else if (string === 'no') {
        return false
    }
}
    catch(err){
        return err;
    }
}

checkstring('yes')


