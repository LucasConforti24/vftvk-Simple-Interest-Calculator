function compute()
{
    
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate /100;
    var year= new Date().getFullYear()+parseInt(years);
    if(p > 0)
    {
        document.getElementById("result").innerText="If you deposit "+ p + ", \
        <br\>at an interest rate of "+ rate + ". %\<br\> You will recieve an amount of "+ interest +" in the year "+ year +".";
    }
    else
    {
        alert("Did you entered a positive number?");
        p.focus();
    }
    
    
}

function updateRate()
{

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}
        
