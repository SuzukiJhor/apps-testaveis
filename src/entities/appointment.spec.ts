import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

test("create on appointment", () => {
  const startsAt = getFutureDate('2023-08-10')
  const endsAt = getFutureDate('2023-08-12')
  
  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });


  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate('2023-08-10')
  const endsAt = getFutureDate('2023-08-09')

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
