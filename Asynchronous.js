function ordermeal()
{
    console.log('meal ordered');
    setTimeout(function()
    {
        console.log('meal ready')
    },2000);
}
function goToplayzone()
{
    console.log('went to play zone');
}
function returnfromplayzone()
{
    console.log('returned from playzone and enjoying meal');
}
ordermeal();
goToplayzone();
returnfromplayzone();
/*o/p=
meal ordered
went to play zone
returned from playzone and enjoying meal
meal ready*/