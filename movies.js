$("input")
  .eq(2)
  .on("click", function (evt) {
    evt.preventDefault();
    console.log($("input").eq(1).val());
    if ($("input").eq(0).val().length < 2) {
      return alert("Movie Name must be at least 2 characters!");
    }
    if (!$("input").eq(1).val()) {
      return alert("Must enter rating 1-10!");
    }
    onSubmit();
  });

function onSubmit() {
  $("tbody").append(
    "<tr><td>" +
      $("input").eq(0).val() +
      "</td><td>" +
      $("input").eq(1).val() +
      "</td><td><button class='delete'>X</button></td></tr>"
  );
}
function deleteParentRow(target) {
  jQuery(target).parent().parent().remove();
}
$("tbody").on("click", ".delete", function (evt) {
  deleteParentRow(evt.target);
});
