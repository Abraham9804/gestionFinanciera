// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import listPlugin from "@fullcalendar/list";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// /*========Calender Js=========*/
// /*==========================*/

// export function calendarInit() {
//   const calendarWrapper = document.querySelector("#calendar");

//   if (calendarWrapper) {
//     /*=================*/
//     //  Calender Date variable
//     /*=================*/
//     const newDate = new Date();
//     const getDynamicMonth = () => {
//       const month = newDate.getMonth() + 1;
//       return month < 10 ? `0${month}` : `${month}`;
//     };

//     /*=================*/
//     // Calender Modal Elements
//     /*=================*/
//     const getModalTitleEl = document.querySelector("#event-title");
//     const getModalStartDateEl = document.querySelector("#event-start-date");
//     const getModalEndDateEl = document.querySelector("#event-end-date");
//     const getModalAddBtnEl = document.querySelector(".btn-add-event");
//     const getModalUpdateBtnEl = document.querySelector(".btn-update-event");
//     const calendarsEvents = {
//       Danger: "danger",
//       Success: "success",
//       Primary: "primary",
//       Warning: "warning",
//     };

//     /*=====================*/
//     // Calendar Elements and options
//     /*=====================*/
//     const calendarEl = document.querySelector("#calendar");

//     const calendarHeaderToolbar = {
//       left: "prev,next addEventButton",
//       center: "title",
//       right: "dayGridMonth,timeGridWeek,timeGridDay",
//     };

//     const calendarEventsList = [
//       {
//         id: 1,
//         title: "Event Conf.",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-01`,
//         extendedProps: { calendar: "Danger" },
//       },
//       {
//         id: 2,
//         title: "Seminar #4",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-07`,
//         end: `${newDate.getFullYear()}-${getDynamicMonth()}-10`,
//         extendedProps: { calendar: "Success" },
//       },
//       {
//         groupId: "999",
//         id: 3,
//         title: "Meeting #5",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-09T16:00:00`,
//         extendedProps: { calendar: "Primary" },
//       },
//       {
//         groupId: "999",
//         id: 4,
//         title: "Submission #1",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-16T16:00:00`,
//         extendedProps: { calendar: "Warning" },
//       },
//       {
//         id: 5,
//         title: "Seminar #6",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-11`,
//         end: `${newDate.getFullYear()}-${getDynamicMonth()}-13`,
//         extendedProps: { calendar: "Danger" },
//       },
//       {
//         id: 6,
//         title: "Meeting 3",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-12T10:30:00`,
//         end: `${newDate.getFullYear()}-${getDynamicMonth()}-12T12:30:00`,
//         extendedProps: { calendar: "Success" },
//       },
//       {
//         id: 7,
//         title: "Meetup #",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-12T12:00:00`,
//         extendedProps: { calendar: "Primary" },
//       },
//       {
//         id: 8,
//         title: "Submission",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-12T14:30:00`,
//         extendedProps: { calendar: "Warning" },
//       },
//       {
//         id: 9,
//         title: "Attend event",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-13T07:00:00`,
//         extendedProps: { calendar: "Success" },
//       },
//       {
//         id: 10,
//         title: "Project submission #2",
//         start: `${newDate.getFullYear()}-${getDynamicMonth()}-28`,
//         extendedProps: { calendar: "Primary" },
//       },
//     ];

//     /*=====================*/
//     // Modal Functions
//     /*=====================*/
//     const openModal = () => {
//       document.getElementById("eventModal").style.display = "flex";
//     };

//     const closeModal = () => {
//       document.getElementById("eventModal").style.display = "none";
//       resetModalFields();
//     };

//     // Close modal when clicking outside of it
//     window.onclick = function (event) {
//       const modal = document.getElementById("eventModal");
//       if (event.target === modal) {
//         closeModal();
//       }
//     };

//     /*=====================*/
//     // Calendar Select fn.
//     /*=====================*/
//     const calendarSelect = (info) => {
//       resetModalFields();

//       getModalAddBtnEl.style.display = "flex";
//       getModalUpdateBtnEl.style.display = "none";
//       openModal();
//       getModalStartDateEl.value = info.startStr;
//       getModalEndDateEl.value = info.endStr || info.startStr;
//       getModalTitleEl.value = "";
//     };

//     /*=====================*/
//     // Calendar AddEvent fn.
//     /*=====================*/
//     const calendarAddEvent = () => {
//       const currentDate = new Date();
//       const dd = String(currentDate.getDate()).padStart(2, "0");
//       const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
//       const yyyy = currentDate.getFullYear();
//       const combineDate = `${yyyy}-${mm}-${dd}T00:00:00`;

//       getModalAddBtnEl.style.display = "flex";
//       getModalUpdateBtnEl.style.display = "none";
//       openModal();
//       getModalStartDateEl.value = combineDate;
//     };

//     /*=====================*/
//     // Calender Event Function
//     /*=====================*/
//     const calendarEventClick = (info) => {
//       const eventObj = info.event;

//       if (eventObj.url) {
//         window.open(eventObj.url);
//         info.jsEvent.preventDefault();
//       } else {
//         const getModalEventId = eventObj._def.publicId;
//         const getModalEventLevel = eventObj._def.extendedProps.calendar;
//         const getModalCheckedRadioBtnEl = document.querySelector(
//           `input[value="${getModalEventLevel}"]`,
//         );

//         getModalTitleEl.value = eventObj.title;
//         getModalStartDateEl.value = eventObj.startStr.slice(0, 10);
//         getModalEndDateEl.value = eventObj.endStr
//           ? eventObj.endStr.slice(0, 10)
//           : "";
//         if (getModalCheckedRadioBtnEl) {
//           getModalCheckedRadioBtnEl.checked = true;
//         }
//         getModalUpdateBtnEl.dataset.fcEventPublicId = getModalEventId;
//         getModalAddBtnEl.style.display = "none";
//         getModalUpdateBtnEl.style.display = "block";
//         openModal();
//       }
//     };

//     /*=====================*/
//     // Active Calender
//     /*=====================*/

//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
//       selectable: true,
//       initialView: "dayGridMonth",
//       initialDate: `${newDate.getFullYear()}-${getDynamicMonth()}-07`,
//       headerToolbar: calendarHeaderToolbar,
//       events: calendarEventsList,
//       select: calendarSelect,
//       eventClick: calendarEventClick,
//       dateClick: calendarAddEvent,
//       customButtons: {
//         addEventButton: {
//           text: "Add Event +",
//           click: calendarAddEvent,
//         },
//       },
//       eventClassNames({ event: calendarEvent }) {
//         const getColorValue =
//           calendarsEvents[calendarEvent._def.extendedProps.calendar];
//         return [`event-fc-color`, `fc-bg-${getColorValue}`];
//       },
//     });

//     /*=====================*/
//     // Update Calender Event
//     /*=====================*/
//     if(getModalUpdateBtnEl){
//         getModalUpdateBtnEl.addEventListener("click", () => {
//       const getPublicID = getModalUpdateBtnEl.dataset.fcEventPublicId;
//       const getTitleUpdatedValue = getModalTitleEl.value;
//       const setModalStartDateValue = getModalStartDateEl.value;
//       const setModalEndDateValue = getModalEndDateEl.value;
//       const getEvent = calendar.getEventById(getPublicID);
//       const getModalUpdatedCheckedRadioBtnEl = document.querySelector(
//         'input[name="event-level"]:checked',
//       );

//       const getModalUpdatedCheckedRadioBtnValue =
//         getModalUpdatedCheckedRadioBtnEl
//           ? getModalUpdatedCheckedRadioBtnEl.value
//           : "";

//       getEvent.setProp("title", getTitleUpdatedValue);
//       getEvent.setDates(setModalStartDateValue, setModalEndDateValue);
//       getEvent.setExtendedProp("calendar", getModalUpdatedCheckedRadioBtnValue);
//       closeModal();
//     });
//     }

//     /*=====================*/
//     // Add Calender Event
//     /*=====================*/
//     if(getModalAddBtnEl){
//         getModalAddBtnEl.addEventListener("click", () => {
//       const getModalCheckedRadioBtnEl = document.querySelector(
//         'input[name="event-level"]:checked',
//       );

//       const getTitleValue = getModalTitleEl.value;
//       const setModalStartDateValue = getModalStartDateEl.value;
//       const setModalEndDateValue = getModalEndDateEl.value;
//       const getModalCheckedRadioBtnValue = getModalCheckedRadioBtnEl
//         ? getModalCheckedRadioBtnEl.value
//         : "";

//       calendar.addEvent({
//         id: Date.now(), // Use unique ID based on timestamp
//         title: getTitleValue,
//         start: setModalStartDateValue,
//         end: setModalEndDateValue,
//         allDay: true,
//         extendedProps: { calendar: getModalCheckedRadioBtnValue },
//       });
//       closeModal();
//     });
//     }

//     /*=====================*/
//     // Calendar Init
//     /*=====================*/
//     calendar.render();

//     // Reset modal fields when hidden
//     if(document.getElementById("eventModal")){
//         document.getElementById("eventModal").addEventListener("click", (event) => {
//       if (event.target.classList.contains("modal-close-btn")) {
//         closeModal();
//       }
//     });
//     }

//     function resetModalFields() {
//       getModalTitleEl.value = "";
//       getModalStartDateEl.value = "";
//       getModalEndDateEl.value = "";
//       const getModalIfCheckedRadioBtnEl = document.querySelector(
//         'input[name="event-level"]:checked',
//       );
//       if (getModalIfCheckedRadioBtnEl) {
//         getModalIfCheckedRadioBtnEl.checked = false;
//       }
//     }

//     if(document.getElementById("eventModal")){
//         document.getElementById("eventModal").addEventListener("hidden.bs.modal", () => {
//         resetModalFields();
//       });
//     }

//     // Close modal when clicking on close button or outside modal
//     document.querySelectorAll(".modal-close-btn").forEach((btn) => {
//       btn.addEventListener("click", closeModal);
//     });

//     window.addEventListener("click", (event) => {
//       if (event.target === document.getElementById("eventModal")) {
//         closeModal();
//       }
//     });
//   }
// };

// export default calendarInit;



import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export function calendarInit() {
  const calendarWrapper = document.querySelector("#calendar");

  if (calendarWrapper) {
    // Calendar Date variable
    const newDate = new Date();
    const getDynamicMonth = () => {
      const month = newDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    };

    // Calendar Modal Elements
    const getModalTitleEl = document.querySelector("#event-title");
    const getModalStartDateEl = document.querySelector("#event-start-date");
    const getModalEndDateEl = document.querySelector("#event-end-date");
    const getModalAddBtnEl = document.querySelector(".btn-add-event");
    const getModalUpdateBtnEl = document.querySelector(".btn-update-event");
    const getModalHeaderEl = document.querySelector("#eventModalLabel");

    const calendarsEvents = {
      Danger: "danger",
      Success: "success",
      Primary: "primary",
      Warning: "warning",
    };

    // Calendar Elements and options
    const calendarEl = document.querySelector("#calendar");

    const calendarHeaderToolbar = {
      left: "prev,next addEventButton",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    };

    const calendarEventsList = [
      {
        id: "1",
        title: "Event Conf.",
        start: `${newDate.getFullYear()}-${getDynamicMonth()}-01`,
        extendedProps: { calendar: "Danger" },
      },
      {
        id: "2",
        title: "Seminar #4",
        start: `${newDate.getFullYear()}-${getDynamicMonth()}-07`,
        end: `${newDate.getFullYear()}-${getDynamicMonth()}-10`,
        extendedProps: { calendar: "Success" },
      },
      {
        id: "3",
        title: "Meeting #5",
        start: `${newDate.getFullYear()}-${getDynamicMonth()}-09T16:00:00`,
        extendedProps: { calendar: "Primary" },
      },
      {
        id: "4",
        title: "Submission #1",
        start: `${newDate.getFullYear()}-${getDynamicMonth()}-16T16:00:00`,
        extendedProps: { calendar: "Warning" },
      },
      {
        id: "5",
        title: "Seminar #6",
        start: `${newDate.getFullYear()}-${getDynamicMonth()}-11`,
        end: `${newDate.getFullYear()}-${getDynamicMonth()}-13`,
        extendedProps: { calendar: "Danger" },
      },
    ];

    // Modal Functions
    const openModal = () => {
      const modal = document.getElementById("eventModal");
      if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent background scroll
      }
    };

    const closeModal = () => {
      const modal = document.getElementById("eventModal");
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restore scroll
      }
      resetModalFields();
    };

    // Reset modal fields
    function resetModalFields() {
      if (getModalTitleEl) getModalTitleEl.value = "";
      if (getModalStartDateEl) getModalStartDateEl.value = "";
      if (getModalEndDateEl) getModalEndDateEl.value = "";
      
      const getModalIfCheckedRadioBtnEl = document.querySelector(
        'input[name="event-level"]:checked'
      );
      if (getModalIfCheckedRadioBtnEl) {
        getModalIfCheckedRadioBtnEl.checked = false;
      }
    }

    // Calendar Select function (when user clicks/drags on calendar)
    const calendarSelect = (info) => {
      resetModalFields();

      // Update modal header
      if (getModalHeaderEl) {
        getModalHeaderEl.textContent = "Add Event";
      }

      // Show Add button, hide Update button
      if (getModalAddBtnEl) getModalAddBtnEl.style.display = "flex";
      if (getModalUpdateBtnEl) getModalUpdateBtnEl.style.display = "none";

      // Set dates from selection
      if (getModalStartDateEl) getModalStartDateEl.value = info.startStr;
      if (getModalEndDateEl) {
        getModalEndDateEl.value = info.endStr || info.startStr;
      }

      openModal();
    };

    // Calendar AddEvent button click
    const calendarAddEvent = () => {
      resetModalFields();

      // Update modal header
      if (getModalHeaderEl) {
        getModalHeaderEl.textContent = "Add Event";
      }

      // Show Add button, hide Update button
      if (getModalAddBtnEl) getModalAddBtnEl.style.display = "flex";
      if (getModalUpdateBtnEl) getModalUpdateBtnEl.style.display = "none";

      // Set default start date to today
      const currentDate = new Date();
      const yyyy = currentDate.getFullYear();
      const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
      const dd = String(currentDate.getDate()).padStart(2, "0");
      const combineDate = `${yyyy}-${mm}-${dd}`;

      if (getModalStartDateEl) getModalStartDateEl.value = combineDate;

      openModal();
    };

    // Calendar Event Click function (when user clicks existing event)
    const calendarEventClick = (info) => {
      const eventObj = info.event;

      if (eventObj.url) {
        window.open(eventObj.url);
        info.jsEvent.preventDefault();
      } else {
        resetModalFields();

        // Update modal header
        if (getModalHeaderEl) {
          getModalHeaderEl.textContent = "Edit Event";
        }

        // Get event details
        const getModalEventId = eventObj.id;
        const getModalEventLevel = eventObj.extendedProps.calendar;

        // Set form values
        if (getModalTitleEl) getModalTitleEl.value = eventObj.title;
        if (getModalStartDateEl) {
          getModalStartDateEl.value = eventObj.startStr.split("T")[0];
        }
        if (getModalEndDateEl) {
          getModalEndDateEl.value = eventObj.endStr
            ? eventObj.endStr.split("T")[0]
            : "";
        }

        // Check the correct radio button
        const getModalCheckedRadioBtnEl = document.querySelector(
          `input[value="${getModalEventLevel}"]`
        );
        if (getModalCheckedRadioBtnEl) {
          getModalCheckedRadioBtnEl.checked = true;
        }

        // Store event ID for update
        if (getModalUpdateBtnEl) {
          getModalUpdateBtnEl.dataset.fcEventPublicId = getModalEventId;
        }

        // Hide Add button, show Update button
        if (getModalAddBtnEl) getModalAddBtnEl.style.display = "none";
        if (getModalUpdateBtnEl) getModalUpdateBtnEl.style.display = "flex";

        openModal();
      }
    };

    // Initialize Calendar
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      selectable: true,
      initialView: "dayGridMonth",
      initialDate: `${newDate.getFullYear()}-${getDynamicMonth()}-07`,
      headerToolbar: calendarHeaderToolbar,
      events: calendarEventsList,
      select: calendarSelect,
      eventClick: calendarEventClick,
      displayEventTime: false, // Hide time display
      customButtons: {
        addEventButton: {
          text: "Add Event +",
          click: calendarAddEvent,
        },
      },
      // eventClassNames({ event: calendarEvent }) {
      //   const getColorValue =
      //     calendarsEvents[calendarEvent._def.extendedProps.calendar];
      //   return [`event-fc-color`, `fc-bg-${getColorValue}`];
      // },
      // Optional: Custom event content without time
      eventContent(eventInfo) {
        const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`
        return {
          html: `
            <div class="event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm">
              <div class="fc-daygrid-event-dot"></div>
              <div class="fc-event-time">${eventInfo.timeText}</div>
              <div class="fc-event-title">${eventInfo.event.title}</div>
            </div>
          `,
        }
      },
    });

    // Update Calendar Event
    // if (getModalUpdateBtnEl) {
    //   getModalUpdateBtnEl.addEventListener("click", () => {
    //     const getPublicID = getModalUpdateBtnEl.dataset.fcEventPublicId;
    //     const getTitleUpdatedValue = getModalTitleEl.value;
    //     const setModalStartDateValue = getModalStartDateEl.value;
    //     const setModalEndDateValue = getModalEndDateEl.value;
    //     const getEvent = calendar.getEventById(getPublicID);
    //     const getModalUpdatedCheckedRadioBtnEl = document.querySelector(
    //       'input[name="event-level"]:checked'
    //     );

    //     const getModalUpdatedCheckedRadioBtnValue =
    //       getModalUpdatedCheckedRadioBtnEl
    //         ? getModalUpdatedCheckedRadioBtnEl.value
    //         : "";

    //     if (getEvent) {
    //       getEvent.setProp("title", getTitleUpdatedValue);
    //       getEvent.setDates(setModalStartDateValue, setModalEndDateValue);
    //       getEvent.setExtendedProp("calendar", getModalUpdatedCheckedRadioBtnValue);
    //     }
        
    //     closeModal();
    //   });
    // }
    if (getModalUpdateBtnEl) {
      getModalUpdateBtnEl.addEventListener("click", () => {
        const getPublicID = getModalUpdateBtnEl.dataset.fcEventPublicId;
        const getTitleUpdatedValue = getModalTitleEl.value;
        const setModalStartDateValue = getModalStartDateEl.value;
        const setModalEndDateValue = getModalEndDateEl.value;
        const getEvent = calendar.getEventById(getPublicID);
        const getModalUpdatedCheckedRadioBtnEl = document.querySelector(
          'input[name="event-level"]:checked'
        );

        const getModalUpdatedCheckedRadioBtnValue =
          getModalUpdatedCheckedRadioBtnEl
            ? getModalUpdatedCheckedRadioBtnEl.value
            : "";

        if (getEvent) {
          // Remove the old event
          getEvent.remove();
          
          // Add updated event with all properties
          calendar.addEvent({
            id: getPublicID,
            title: getTitleUpdatedValue,
            start: setModalStartDateValue,
            end: setModalEndDateValue,
            allDay: true,
            extendedProps: { calendar: getModalUpdatedCheckedRadioBtnValue },
          });
        }
        
        closeModal();
      });
    }

    // Add Calendar Event
    if (getModalAddBtnEl) {
      getModalAddBtnEl.addEventListener("click", () => {
        const getModalCheckedRadioBtnEl = document.querySelector(
          'input[name="event-level"]:checked'
        );

        const getTitleValue = getModalTitleEl.value;
        const setModalStartDateValue = getModalStartDateEl.value;
        const setModalEndDateValue = getModalEndDateEl.value;
        const getModalCheckedRadioBtnValue = getModalCheckedRadioBtnEl
          ? getModalCheckedRadioBtnEl.value
          : "";

        calendar.addEvent({
          id: Date.now().toString(),
          title: getTitleValue,
          start: setModalStartDateValue,
          end: setModalEndDateValue,
          allDay: true,
          extendedProps: { calendar: getModalCheckedRadioBtnValue },
        });
        
        closeModal();
      });
    }

    // Render Calendar
    calendar.render();

    // Close modal event listeners
    document.querySelectorAll(".modal-close-btn").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    // Close when clicking outside modal
    window.addEventListener("click", (event) => {
      const modal = document.getElementById("eventModal");
      if (event.target === modal) {
        closeModal();
      }
    });
  }
}

export default calendarInit;
