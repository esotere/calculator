$(function() {
  // *******************************************************************
  let form = $("#whatPercentageForm");
  
  let percentage = (a, b) => {
      let calculate = a / b;
      console.log(calculate);
      let percent = calculate * 100;
      console.log(percent);
      return percent;
    };
    
  let simpleInterest = (a, b, c) => {
      let calculate = a * b * c
      let si = calculate / 100;
      console.log(si);
      return si;
  }

  let compoundInterest = (a, g, b, c, d) => {
    //   b = b / 100; 
      let interest = (1 + ((b/100) / c));
      let ci = (a + (g * 12)) * (Math.pow(interest, (c * d)));
      console.log(ci);
      return ci;

  }
    
    form.submit(e => {
        e.preventDefault();
        
        let xValue = $("#xValue")
          .val()
          .trim();
        let yValue = $("#yValue")
          .val()
          .trim();
    

    
        if (!xValue || !yValue) {
      alert("Please Enter Value In Both Fields");
    } else {
      console.log(xValue);
      console.log(yValue);

      let x = parseFloat(xValue);
      let y = parseFloat(yValue);

      console.log(x);
      console.log(y);

      let ans = percentage(x, y);
      console.log(ans);
    //   $("#result").append(ans);
      $("#result").empty()
      $("#result").append(ans);
    }




});

// let calculatorChoice = () => {
    
    
    
    $("#mySelect").change(() => {
        console.log("changed")
        // $(".inquiry").empty()

        $("#symbol").empty()
        
        let selection = $("#mySelect").val();
        console.log(selection)
        console.log(selection);
        // let simpleInterestForm = $("#sif");
        
        if (selection === "simpleInterest") {
            console.log("si chosen")
            // let createDiv = $("div").attr("id", "sif");
            let siForm = ("<h1>Simple Interest Calculator</h1>" +
            "<form id='simpleInterestForm'>" +
            "<select name='calculator' id='mySelect'>" +
                "<option value='simpleInterest'>Simple Interest</option>" +
                "<option value='percentage'>Percentage</option>" +
                "<option value='tip'>Tip</option>" +
                "<option value='compoundInterest'>Compound Interest</option>" +
            "</select>" +
            "<input class='generated' type='text' id='xValue2' placeholder='principal'></input>" +
            "<input class='generated' type='text' id='yValue2' placeholder='rate'></input>" +
            "<input class='generated' type='text' id='zValue2' placeholder='time'></input>" +
            "<br>" +
            "<br>" +
            "<input class='generated' type='submit' value='Submit' id='submit'></input>" +
        "</form>")
            
            $(".inquiry").html(siForm);
        };

        let form2 = $("#simpleInterestForm");
    
        form2.submit(event => {
            event.preventDefault();
    
            let principle = $("#xValue2").val().trim();
            let rate = $("#yValue2").val().trim();
            let time = $("#zValue2").val().trim();
    
            if (!principle || !rate || !time) {
                alert("Please Enter Valid Values!");
            } else {
                console.log(principle);
                console.log(rate);
                console.log(time)
    
                let x = parseFloat(principle);
                let y = parseFloat(rate);
                let z = parseFloat(time);
    
                console.log(x);
                console.log(y);
                console.log(z);
    
                let answer = simpleInterest(x, y, z);
                console.log(answer);
                $("#result").empty()
                $("#result").prepend("$")
                $("#result").append(answer);
            }
        })

        if ( selection === "compoundInterest") {
            console.log("Compound Interest Selected");

            let compoundInterestForm = $("<h1>Compound Interest</h1>" +
                "<form id='compoundInteresrForm'>" +
                "<select name='calculator' id='mySelect'>" +
                "<option value='compoundInterest'>Compound Interest</option>" +
                "<option value='percentage'>Percentage</option>" +
                "<option value='tip'>Tip</option>" +
            "</select>" +
            "<input class='generated' type='text' id='wValue' placeholder='principal'></input>" +
            "<input class='generated' type='text' id='gValue' placeholder='monthlyContribution' value='0'></input>" +
            "<input class='generated' type='text' id='yValue3' placeholder='rate'></input>" +
            "<input class='generated' type='text' id='zValue3' placeholder='time'></input>" +
            "<input class='generated' type='text' id='xValue3' placeholder='period'></input>" +
            "<br>" +
            "<br>" +
            "<input class='generated' type='submit' value='Submit' id='submit'></input>" +
        "</form>")

        $(".inquiry").html(compoundInterestForm);

        let form3 = $("#compoundInteresrForm");
cd
            let principal = $("#wValue").val().trim();
            let monthlyContribution = $("#gValue").val().trim();
            let rate = $("#xValue3").val().trim();
            let time = $("#yValue3").val().trim();
            let period= $("#zValue3").val().trim();

            if (!principal || !rate || !time || !period) {
                alert("Please Enter Valid Values!");
            } else {
                
                console.log(principal);
                console.log(monthlyContribution);
                console.log(rate);
                console.log(time);
                console.log(period);

                monthlyContribution += monthlyContribution; // look here for error

                let a = parseFloat(principal);
                let g = parseFloat(monthlyContribution);
                let b = parseFloat(rate);
                let c = parseFloat(time);
                let d = parseFloat(period);

                console.log(a);
                console.log(g);
                console.log(b);
                console.log(c);
                console.log(d);
    
                let answer = compoundInterest(a, g, b, c, d);
                console.log(answer);
                $("#result").empty()
                $("#result").prepend("$")
                $("#result").append(answer);
            }
        })
        }
    })

// }
// calculatorChoice();

  //   submit.on("click", e => {
  //     e.preventDefault();
  //     if (xValue && yValue) {
  //       console.log(xValue);
  //       console.log(yValue);

  //       let x = parseFloat(xValue);
  //       let y = parseFloat(yValue);

  //       let ans = percentage(x, y);
  //       console.log(ans);
  //       $("#result").text(ans);
  //     } else {
  //       alert("Please Enter Value In Both Fields");
  //     }
  //   });

  //   let field1 = document.getElementById("xValue")
  //   let field2 = document.getElementById("yValue")
  //   let form = document.getElementById("whatPercentageForm");

  //   form.addEventListener("submit", function() {
  //       if (!field1.value || !field2.value) {
  //           alert("no values")
  //       } else {
  //           let x = parseFloat(field1.value)
  //           let y = parseFloat(field2.value)

  //           console.log(x);
  //           console.log(y);

  //       }
  //   })

  // ****************************************************************************
  // **************working as intended*************************
  // let xValue = $("#xValue");
  // let yValue = $("#yValue");
  // let submit = $("#submit");
  // let form = $("#whatPercentageForm");

  // let percentage = (a, b) => {
  //     let calculate = (a / b);
  //     console.log(calculate);
  //     let percent = calculate * 100;
  //     console.log(percent);
  //     return percent;
  //   };

  //   form.submit(e => {
  //       e.preventDefault();

  //       if (!xValue.val() || !yValue.val()) {
  //           alert("Please Enter Value In Both Fields");
  //       } else {
  //           console.log(xValue.val());
  //           console.log(yValue.val());

  //           let x = parseFloat(xValue.val());
  //           let y = parseFloat(yValue.val());

  //           console.log(x);
  //           console.log(y);

  //           let ans = percentage(x, y);
  //           console.log(ans);
  //           // $("#result").append(ans);
  //           $("#symbol").prepend(ans)
  //       }
  //   });
});
