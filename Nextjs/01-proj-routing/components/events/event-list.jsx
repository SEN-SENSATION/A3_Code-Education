import EventItem from "./event-item";

const EventList = (props) => {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => {
        return <EventItem eventDetails={event} />;
      })}
    </ul>
  );
};

export default EventList;
