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
});
