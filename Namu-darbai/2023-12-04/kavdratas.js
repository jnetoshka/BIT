let n = 10;

for(let i = 0; i < n; i++){
    document.write(i)

    for (let ii= 0; ii < n; ii++)
    {
        if(i === ii || i+ii+1===n){
            document.write('<span style="color:red">*</span>');
        }
        else
        document.write("<span>*</span>");
    }
    document.write("<br>");
}
