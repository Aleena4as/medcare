var newEvent;
var editEvent;

$(document).ready(function () {
   var calendar = $("#calendar").fullCalendar({
      eventRender: function (event, element, view) {
         var startTimeEventInfo = moment(event.start).format("HH:mm");
         var endTimeEventInfo = moment(event.end).format("HH:mm");
         var displayEventDate;

         // if (event.avatar.length > 1) {

         //     element.find(".fc-content").css('padding-left', '55px');
         //     element.find(".fc-content").after($("<div class=\"fc-avatar-image\"></div>").html('<img src=\'' + event.avatar + '\' />'));

         // }

         if (event.allDay == false) {
            displayEventDate = startTimeEventInfo + " - " + endTimeEventInfo;
         } else {
            displayEventDate = "All Day";
         }
         element.popover({
            title:
               '<div class="popoverTitleCalendar" style="background-color:' +
               event.backgroundColor +
               "; color:" +
               event.textColor +
               '">' +
               event.title +
               "</div>",
            content:
               '<div class="popoverInfoCalendar">' +
               "<p><strong>Calendar:</strong> " +
               event.calendar +
               "</p>" +
               "<p><strong>Booking Type:</strong> " +
               event.bookingType +
               "</p>" +
               "<p><strong>Event Type:</strong> " +
               event.type +
               "</p>" +
               "<p><strong>Event Time:</strong> " +
               displayEventDate +
               "</p>" +
               '<div class="popoverDescCalendar"><strong>Description:</strong> ' +
               event.description +
               "</div>" +
               "</div>",
            delay: {
               show: "800",
               hide: "50",
            },
            trigger: "hover",
            placement: "top",
            html: true,
            container: "body",
         });
         // console.log("event is", event);

         if (event.calendar == "Dubai") {
            element.css("background-color", "#f7deed");
            element.css("color", "#000000");
         }

         if (event.calendar == "Sharjah") {
            element.css("background-color", "#FFC9E9");
            element.css("color", "#000000");
         }

         var show_bookingType,
            show_type = true,
            show_calendar = true;

         var bookingType = $("input:checkbox.filter:checked")
            .map(function () {
               return $(this).val();
            })
            .get();
         var types = $("#type_filter").val();
         var calendars = $("#calendar_filter").val();

         show_bookingType = bookingType.indexOf(event.bookingType) >= 0;

         if (types && types.length > 0) {
            if (types[0] == "all") {
               show_type = true;
            } else {
               show_type = types.indexOf(event.type) >= 0;
            }
         }

         if (calendars && calendars.length > 0) {
            if (calendars[0] == "all") {
               show_calendar = true;
            } else {
               show_calendar = calendars.indexOf(event.calendar) >= 0;
            }
         }

         return show_bookingType && show_type && show_calendar;
      },
      // customButtons: {
      //     printButton: {
      //         icon: 'print',
      //         click: function () {
      //             window.print();
      //         }
      //     }
      // },
      header: {
         left: "prev, next,today",
         center: "title",
         right: "month,agendaWeek,agendaDay,listWeek",
      },
      views: {
         month: {
            columnFormat: "dddd",
         },
         agendaWeek: {
            columnFormat: "ddd D/M",
            eventLimit: false,
         },
         agendaDay: {
            columnFormat: "dddd",
            eventLimit: false,
         },
         listWeek: {
            columnFormat: "",
         },
      },

      loading: function (bool) {
         //alert('events are being rendered');
      },
      eventAfterAllRender: function (view) {
         if (view.name == "month") {
            $(".fc-content").css("height", "auto");
         }
      },
      eventLimitClick: function (cellInfo, event) {},
      eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
         // console.log("dragged and changing time", event);
         $(".popover.fade.top").remove();
      },
      eventDragStart: function (event, jsEvent, ui, view) {
         // console.log("dragged an event", event);
         var draggedEventIsAllDay;
         draggedEventIsAllDay = event.allDay;
      },
      eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
         // console.log("dragged and dropped", event);
         $(".popover.fade.top").remove();
      },
      unselect: function (jsEvent, view) {
         //$(".dropNewEvent").hide();
      },
      dayClick: function (startDate, jsEvent, view) {
         //var today = moment();
         //var startDate;
         //if(view.name == "month"){
         //  startDate.set({ hours: today.hours(), minute: today.minutes() });
         //  alert('Clicked on: ' + startDate.format());
         //}
      },

      eventClick: function (event, jsEvent, view) {
         editEvent(event);
      },
      locale: "en-GB",
      timezone: "local",
      nextDayThreshold: "09:00:00",
      allDaySlot: true,
      displayEventTime: true,
      displayEventEnd: true,
      firstDay: 1,
      weekNumbers: false,
      selectable: true,
      weekNumberCalculation: "ISO",
      eventLimit: true,
      eventLimitClick: "week", //popover
      navLinks: true,
      // defaultDate: moment("2021-08-16"), //for specific dates
      defaultDate: new moment().format(),
      defaultView: "agendaWeek",
      timeFormat: "h(:mm)t",
      defaultTimedEventDuration: "01:00:00",
      editable: true,
      minTime: "07:00:00",
      maxTime: "18:00:00",
      // slotLabelFormat: 'hh:mm',
      weekends: true,
      nowIndicator: true,
      dayPopoverFormat: "dddd DD/MM",
      longPressDelay: 0,
      eventLongPressDelay: 0,
      selectLongPressDelay: 0,

      events: [
         {
            _id: 1,
            title: "Covid test @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-07T09:30",
            end: "2021-08-07T10:00",
            type: "Covid test @Home",
            calendar: "Dubai",
            className: "colorCovid",
            bookingType: "Online Booking",
            backgroundColor: "#9f4aff",
            textColor: "#ffffff",
            allDay: false,
         },
         {
            _id: 2,
            title: "Covid test @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-01T12:30",
            end: "2021-08-01T15:30",
            type: "Covid test @Home",
            calendar: "Dubai",
            className: "colorCovid",
            bookingType: "Manual Booking",
            backgroundColor: "#9f4aff",
            textColor: "#ffffff",
            allDay: false,
         },
         {
            _id: 3,
            title: "Lab test @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-02",
            end: "2021-08-02",
            type: "Lab test @Home",
            calendar: "Dubai",
            className: "colorLab",
            bookingType: "Manual Booking",
            backgroundColor: "#ff4747",
            textColor: "#ffffff",
            allDay: true,
         },
         {
            _id: 4,
            title: "Vaccination @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-06",
            end: "2021-08-06",
            type: "Vaccination @Home",
            calendar: "Dubai",
            className: "colorVaccination",
            bookingType: "Online Booking",
            backgroundColor: "#ffc400;",
            textColor: "#ffffff",
            allDay: true,
         },
         {
            _id: 5,
            title: "Nurse @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-08",
            end: "2021-08-08",
            type: "Nurse @Home",
            calendar: "Sharjah",
            className: "colorNurse",
            bookingType: "Online Booking",
            backgroundColor: "#fe56f2",
            textColor: "#ffffff",
            allDay: true,
         },
         {
            _id: 6,
            title: "Doctor @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-09",
            end: "2021-08-09",
            type: "Doctor @Home",
            calendar: "Sharjah",
            className: "colorDoctor",
            bookingType: "Online Booking",
            backgroundColor: "#0de882",
            textColor: "#ffffff",
            allDay: true,
         },
         {
            _id: 7,
            title: "Physio @Home",
            description: "Lorem ipsum dolor sit incid idunt ut Lorem ipsum sit.",
            start: "2021-08-16",
            end: "2021-08-08",
            type: "Physio @Home",
            calendar: "Sharjah",
            className: "colorPhysio",
            bookingType: "Online Booking",
            backgroundColor: "#26cbff",
            textColor: "#ffffff",
            allDay: true,
         },
      ],
   });

   $(".filter").on("change", function () {
      $("#calendar").fullCalendar("rerenderEvents");
   });

   $("#type_filter").select2({
      placeholder: "Filter Test Types",
      allowClear: true,
   });

   $("#calendar_filter").select2({
      placeholder: "Filter Emirates",
      allowClear: true,
   });

   $("#starts-at, #ends-at").datetimepicker({
      format: "ddd DD MMM YYYY hh:mm A",
   });

   //var minDate = moment().subtract(0, 'days').millisecond(0).second(0).minute(0).hour(0);

   $(" #editStartDate, #editEndDate").datetimepicker({
      format: "ddd DD MMM YYYY hh:mm A",
      //minDate: minDate
   });

   //CREATE NEW EVENT CALENDAR

   // newEvent = function (start, end, eventType) {
   //    var colorEventyType;

   //    if (eventType == "Covid test @Home") {
   //       colorEventyType = "colorCovid";
   //    } else if (eventType == "Lab test @Home") {
   //       colorEventyType = "colorLab";
   //    } else if (eventType == "Vaccination @Home") {
   //       colorEventyType = "colorVaccination";
   //    } else if (eventType == "Nurse @Home") {
   //       colorEventyType = "colorNurse";
   //    } else if (eventType == "Doctor @Home") {
   //       colorEventyType = "colorDoctor";
   //    } else if (eventType == "Physio @Home") {
   //       colorEventyType = "colorPhysio";
   //    }

   //    $("#contextMenu").hide();
   //    $(".eventType").text(eventType);
   //    $("input#title").val("");
   //    $("#starts-at").val(start);
   //    $("#ends-at").val(end);
   //    $("#newEventModal").modal("show");

   //    var statusAllDay;
   //    var endDay;

   //    $(".allDayNewEvent").on("change", function () {
   //       if ($(this).is(":checked")) {
   //          statusAllDay = true;
   //          var endDay = $("#ends-at").prop("disabled", true);
   //       } else {
   //          statusAllDay = false;
   //          var endDay = $("#ends-at").prop("disabled", false);
   //       }
   //    });

   //    //GENERATE RAMDON ID - JUST FOR TEST - DELETE IT
   //    var eventId = 1 + Math.floor(Math.random() * 1000);
   //    //GENERATE RAMDON ID - JUST FOR TEST - DELETE IT

   //    $("#save-event").unbind();
   //    $("#save-event").on("click", function () {
   //       var title = $("input#title").val();
   //       var startDay = $("#starts-at").val();
   //       if (!$(".allDayNewEvent").is(":checked")) {
   //          var endDay = $("#ends-at").val();
   //       }
   //       var calendar = $("#calendar-type").val();
   //       var description = $("#add-event-desc").val();
   //       var type = eventType;
   //       if (title) {
   //          var eventData = {
   //             _id: eventId,
   //             title: title,
   //             start: startDay,
   //             end: endDay,
   //             description: description,
   //             type: type,
   //             calendar: calendar,
   //             className: colorEventyType,
   //             bookingType: "Online Booking",
   //             backgroundColor: "#1756ff",
   //             textColor: "#ffffff",
   //             allDay: statusAllDay,
   //          };
   //          $("#calendar").fullCalendar("renderEvent", eventData, true);
   //          $("#newEventModal").find("input, textarea").val("");
   //          $("#newEventModal").find("input:checkbox").prop("checked", false);
   //          $("#ends-at").prop("disabled", false);
   //          $("#newEventModal").modal("hide");
   //       } else {
   //          alert("Title can't be blank. Please try again.");
   //       }
   //    });
   // };

   //EDIT EVENT CALENDAR

   editEvent = function (event, element, view) {
      $(".popover.fade.top").remove();
      $(element).popover("hide");

      //$(".dropdown").hide().css("visibility", "hidden");

      if (event.allDay == true) {
         $("#editEventModal").find("#editEndDate").attr("disabled", true);
         $("#editEventModal").find("#editEndDate").val("");
         $(".allDayEdit").prop("checked", true);
      } else {
         $("#editEventModal").find("#editEndDate").attr("disabled", false);
         $("#editEventModal").find("#editEndDate").val(event.end.format("ddd DD MMM YYYY hh:mm A"));
         $(".allDayEdit").prop("checked", false);
      }

      $(".allDayEdit").on("change", function () {
         if ($(this).is(":checked")) {
            $("#editEventModal").find("#editEndDate").attr("disabled", true);
            $("#editEventModal").find("#editEndDate").val("");
            $(".allDayEdit").prop("checked", true);
         } else {
            $("#editEventModal").find("#editEndDate").attr("disabled", false);
            $(".allDayEdit").prop("checked", false);
         }
      });

      $("#editTitle").val(event.title);
      $("#editStartDate").val(event.start.format("ddd DD MMM YYYY hh:mm A"));
      $("#edit-calendar-type").val(event.calendar);
      $("#edit-event-desc").val(event.description);
      $(".eventName").text(event.title);
      $("#editEventModal").modal("show");
      $("#updateEvent").unbind();
      $("#updateEvent").on("click", function () {
         var statusAllDay;
         if ($(".allDayEdit").is(":checked")) {
            statusAllDay = true;
         } else {
            statusAllDay = false;
         }
         var title = $("#editTitle").val();
         var startDate = $("input#editStartDate").val();
         var endDate = $("input#editEndDate").val();
         var calendar = $("#edit-calendar-type").val();
         var description = $("#edit-event-desc").val();
         $("#editEventModal").modal("hide");
         var eventData;
         if (title) {
            event.title = title;
            event.start = startDate;
            event.end = endDate;
            event.calendar = calendar;
            event.description = description;
            event.allDay = statusAllDay;
            $("#calendar").fullCalendar("updateEvent", event);
         } else {
            alert("Title can't be blank. Please try again.");
         }
      });

      $("#deleteEvent").on("click", function () {
         $("#deleteEvent").unbind();
         if (event._id.includes("_fc")) {
            $("#calendar").fullCalendar("removeEvents", [event._id]);
         } else {
            $("#calendar").fullCalendar("removeEvents", [event._id]);
         }
         $("#editEventModal").modal("hide");
      });
   };

   //SET DEFAULT VIEW CALENDAR

   var defaultCalendarView = $("#calendar_view").val();

   if (defaultCalendarView == "month") {
      $("#calendar").fullCalendar("changeView", "month");
   } else if (defaultCalendarView == "agendaWeek") {
      $("#calendar").fullCalendar("changeView", "agendaWeek");
   } else if (defaultCalendarView == "agendaDay") {
      $("#calendar").fullCalendar("changeView", "agendaDay");
   } else if (defaultCalendarView == "listWeek") {
      $("#calendar").fullCalendar("changeView", "listWeek");
   }

   $("#calendar_view").on("change", function () {
      var defaultCalendarView = $("#calendar_view").val();
      $("#calendar").fullCalendar("changeView", defaultCalendarView);
   });
});
