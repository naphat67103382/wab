function myfun() {
  const body = document.getElementById();

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode"); // กลับเป็นโหมดกลางวัน
  } else {
    body.classList.add("dark-mode"); // เปลี่ยนเป็นโหมดกลางคืน
  }
}
