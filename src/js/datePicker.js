let dpMin, dpMax;

dpMin = new AirDatepicker("#el1", {
  selectedDates: [new Date()],
  onSelect({ date }) {
    dpMax.update({
      minDate: date,
    });
  },
});

dpMax = new AirDatepicker("#el2", {
  onSelect({ date }) {
    dpMin.update({
      maxDate: date,
    });
  },
});
