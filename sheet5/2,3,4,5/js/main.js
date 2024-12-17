console.log("Hello from sheet5");
$(document).ready(function () {
  $("#name").after(`  <div>
        <label for="city">city</label>
        <input type="text" id="city" />
      </div>
        <div>
        <label for="country">Countrt</label>
        <input type="text" id="country" />
      </div>
      
      `);
  $("#email").after(`  <div>
        <label for="gender">gender</label>
        <input type="text" id="gender" />
      </div>
      
      `);
  $("#apple").before("<li>Avocado</li>");
  $("#watermelon").after("<li>grapes</li>");

  $("#mytable").css({
    padding: "10px",
    margin: "5px",
    backgroundColor: "green",
    color: "blue",
    border: "1px solid black",
  });

  $("#big").click(function () {
    $("#text").css("font-size", "30px");
  });

  $("#medium").click(function () {
    $("#text").css("font-size", "20px");
  });

  $("#small").click(function () {
    $("#text").css("font-size", "12px");
  });

  // Change text color
  $(".red").click(function () {
    $("#text").css("color", "red");
  });

  $(".blue").click(function () {
    $("#text").css("color", "blue");
  });

  $(".green").click(function () {
    $("#text").css("color", "green");
  });

  // Animate text
  $("#animate").click(function () {
    $("#text").animate(
      {
        fontSize: "30px",
        opacity: 0.5,
      },
      1000
    );
  });
});
