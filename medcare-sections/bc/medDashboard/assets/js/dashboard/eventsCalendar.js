document.addEventListener("DOMContentLoaded", function () {
   var calendarEl = document.getElementById("calendar");
   var dateToday = new Date();
   var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
         left: "prev,next today",
         center: "title",
         right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      aspectRatio: 1.15,
      height: 1066.67,
      width: 1000,
      initialView: "timeGridWeek",
      initialDate: dateToday,
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      eventLimit: true, // allow "more" link when too many events
      nowIndicator: true,
      now: dateToday, // keeps a red line on event running time
      eventColor: "#f7deed", // changes the color of the event

      // to add an event manually begins here
      select: function (arg) {
         var title = prompt("Event Title:");
         if (title) {
            calendar.addEvent({
               title: title,
               start: arg.start,
               end: arg.end,
               allDay: arg.allDay,
            });
         }
         calendar.unselect();
      },
      // to add an event manually ends here

      // to delete an event begins here
      eventClick: function (arg) {
         if (confirm("Are you sure you want to delete this event?")) {
            arg.event.remove();
         }
      },
      // to delete an event ends here

      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
         {
            title: "All Day Event",
            start: "2021-08-01",
         },
         {
            title: "Blocked Event",
            start: "2021-08-11T10:00:00",
            end: "2021-08-11T16:00:00",
            constraint: "BlockEventSlot",
            color: "#ececec",
         },
         {
            title: "Long Event",
            start: "2021-08-07",
            end: "2021-08-10",
            constraint: "bookedAppointment",
            school: "1",
         },

         {
            title: "Conference",
            start: "2021-08-11",
            end: "2021-08-13",
            constraint: "bookedAppointment",
         },
         {
            title: "Meeting",
            start: "2021-08-12T10:30:00",
            end: "2021-08-12T12:30:00",
            constraint: "bookedAppointment",
            school: "1",
         },
         {
            title: "Meeting",
            start: "2021-08-11T10:30:00",
            end: "2021-08-12T12:30:00",
            school: "2",
         },
         {
            title: "Meeting",
            start: "2021-08-11T10:30:00",
            end: "2021-08-12T12:30:00",
            school: "2",
         },
         {
            title: "Lunch",
            start: "2021-08-12T12:00:00",
            constraint: "bookedAppointment",
         },
         {
            title: "Meeting",
            start: "2021-08-12T14:30:00",
            constraint: "bookedAppointment",
         },
         {
            title: "Happy Hour",
            start: "2021-08-12T17:30:00",
            constraint: "bookedAppointment",
         },
         {
            title: "Dinner",
            start: "2021-08-12T20:00:00",
            constraint: "bookedAppointment",
         },
         {
            title: "Birthday Party",
            start: "2021-08-13T07:00:00",
            constraint: "bookedAppointment",
            school: "2",
         },
         {
            title: "Anniversary Party",
            start: "2021-08-13T07:00:00",
            constraint: "bookedAppointment",
            school: "1",
         },

         // {
         //    title: "Click for Google",
         //    url: "http://google.com/",
         //    start: "2021-08-28",
         // },

         // areas where "Blocked Slots" must be dropped
         // {
         //    groupId: "BlockEventSlot",
         //    start: "2021-08-11T10:00:00",
         //    end: "2021-08-11T16:00:00",
         //    display: "background",
         //    color: "#ececec",
         // },
         // {
         //    groupId: "BlockEventSlot",
         //    start: "2021-08-13T10:00:00",
         //    end: "2021-08-13T16:00:00",
         //    display: "background",
         //    color: "#ececec",
         // },
      ],


      //    eventAfterAllRender: function() {

      //       // define static values
      //       var defaultItemHeight = 45;
      //       var defaultEventItemHeight = 40;
      //       // ...

      //       // find all rows and define a function to select one row with an specific time
      //       var rows = [];
      //       $('div.fc-slats > table > tbody > tr[data-time]').each(function() {
      //           rows.push($(this));
      //       });
      //       var rowIndex = 0;
      //       var getRowElement = function(time) {
      //           while (rowIndex < rows.length && moment(rows[rowIndex].attr('data-time'), ['HH:mm:ss']) <= time) {
      //               rowIndex++;
      //           }
      //           var selectedIndex = rowIndex - 1;
      //           return selectedIndex >= 0 ? rows[selectedIndex] : null;
      //       };

      //       // reorder events items position and increment row height when is necessary
      //       $('div.fc-content-col > div.fc-event-container').each(function() { // for-each week column
      //           var accumulator = 0;
      //           var previousRowElement = null;

      //           $(this).find('> a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end').each(function() { // for-each event on week column
      //               // select the current event time and its row
      //               var currentEventTime = moment($(this).find('> div.fc-content > div.fc-time').attr('data-full'), ['h:mm A']);
      //               var currentEventRowElement = getRowElement(currentEventTime);

      //               // the current row has to more than one item
      //               if (currentEventRowElement === previousRowElement) {
      //                   accumulator++;

      //                   // move down the event (with margin-top prop. IT HAS TO BE THAT PROPERTY TO AVOID CONFLICTS WITH FullCalendar BEHAVIOR)
      //                   $(this).css('margin-top', '+=' + (accumulator * defaultItemHeight).toString() + 'px');

      //                   // increse the heigth of current row if it overcome its current max-items
      //                   var maxItemsOnRow = currentEventRowElement.attr('data-max-items') || 1;
      //                   if (accumulator >= maxItemsOnRow) {
      //                       currentEventRowElement.attr('data-max-items', accumulator + 1);
      //                       currentEventRowElement.css('height', '+=' + defaultItemHeight.toString() + 'px');
      //                   }
      //               } else {
      //                   // reset count
      //                   rowIndex = 0;
      //                   accumulator = 0;
      //               }

      //               // set default styles for event item and update previosRow
      //               $(this).css('left', '0');
      //               $(this).css('right', '7px');
      //               $(this).css('height', defaultEventItemHeight.toString() + 'px');
      //               $(this).css('margin-right', '0');
      //               previousRowElement = currentEventRowElement;
      //           });
      //       });

      //       // this is used for re-paint the calendar
      //       $('#calendar').fullCalendar('option', 'aspectRatio', $('#calendar').fullCalendar('option', 'aspectRatio'));
      //   }
   });

   calendar.render();
  
});

$(document).ready(function () {
   $("#openEvents").on("click", function (event) {
      $(".fc-timeGridDay-button").click();
   });
});
