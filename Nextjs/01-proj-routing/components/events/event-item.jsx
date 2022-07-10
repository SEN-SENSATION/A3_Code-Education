import Link from "next/link";

const EventItem = (props) => {
  const { eventDetails } = props;

  const formattedDate = new Date(eventDetails.date).toLocaleDateString(
    "en-UK",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const formattedAddress = eventDetails.location.replace(", ", "\n");

  return (
    <li>
      <img src={`/${eventDetails.image}`} alt="" />
      <div>
        <div>{eventDetails.tittle}</div>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${eventDetails.id}`}>Explore Event</Link>
      </div>
    </li>
  );
};
export default EventItem;
