function sumar()
{
    
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);

    
    let sum= num1+num2;
    
    document.getElementById('resultado').value =sum;

}
function fizz_buzz()
{
    let i=1;
    for(i = 1; i <= 100; i++)
    {
        if ((i % 3 == 0) && (i % 5 == 0)){
        document.write(i + ".-"+ "Fizz-Buzz" + '<br>');}
        else {
            if (i % 3 == 0)
                document.write(i + ".- "+"Fizz"+ '<br>');
            else {
                if (i % 5 == 0)
                     document.write(i + ".-"+ "Buzz" + '<br>');
                else {
                     document.write(i+ '<br>');
                }
            }
        }
    }
}