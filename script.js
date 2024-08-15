function goToSubjectPage() {
    const selectElement = document.getElementById("subjects");
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}