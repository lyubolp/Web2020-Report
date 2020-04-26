var first_selected = false;
var operator_selected = false;
var second_selected = false;

// + 43
// - 45
// * 42
// / 47
var first = 0;
var operation = 43;
var second = 0;
var result = 0;

function handle_click(value)
{
  if(value == '+' || value == '-' || value == '*' || value == '/')
  {
    if(value == '+')
      {
        operation = 43;
      }
      else if(value == '-')
      {
        operation = 45;
      }
      else if(value == '*')
      {
        operation = 42;
      }
      else
      {
        operation = 47;
      }
      first_selected = true;
      operator_selected = true;
      document.getElementById("operator").innerHTML = value;
  }
  else if(value == '=')
  {
    var result = _calculate(first, second, operation);
    document.getElementById("result").innerHTML = result;
  }
  else if(value == "clear")
  {
    first = 0;
    operation = 43;
    second = 0;
    result = 0;

    first_selected = false;
    operator_selected = false;
    second_selected = false;

    document.getElementById("num1").innerHTML = first;
    document.getElementById("num2").innerHTML = second;
    document.getElementById("operator").innerHTML = '+';
    document.getElementById("result").innerHTML = result;
  }
  else 
  {
    if(first_selected == false)
    {
      first *= 10;
      first += parseInt(value);
      console.log(first);
      document.getElementById("num1").innerHTML = first;
    }
    else if(second_selected == false)
    {
      second *= 10;
      second += parseInt(value);
      document.getElementById("num2").innerHTML = second;
    }
  }
  
}
document.querySelectorAll('.action_button').forEach(item => {
  item.addEventListener('click', event => {
    handle_click(item.id);
  })
})