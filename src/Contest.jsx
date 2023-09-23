import { format } from "date-fns";
import "./Contest.css";

const Contest = ({ contest }) => {
  const start_time = format(
    new Date(contest.start_time),
    "MM-dd-yyyy HH:mm:ss"
  );

  const end_time = format(new Date(contest.end_time), "MM-dd-yyyy HH:mm:ss");

  const start = contest.start_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const end = contest.end_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const text = contest.name.replace(/ /g, "+");
  const calendar = `https://calendar.google.com/event?action=TEMPLATE&dates=${start}/${end}&text=${text}&location=${contest.url}`;
  const name = contest.name.slice(0, 80);

  return (
    <div className="container-big">
      <div className="contest-card">
        <span className="rounded-full bg-green-100 text-green-600 text-xs site-link-name">
          {contest.site}
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8 ">
          <img
            src="https://getwallpapers.com/wallpaper/full/b/3/8/358806.jpg"
            className="logo"
            alt="contest site logo"
          />

          <h5 className="">{name}</h5>

          <dl className="timings">
            <div className="time-container">
              <dt className=" start">Start Time</dt>

              <dd className="start">{start_time}</dd>
            </div>

            <div className="time-container">
              <dt className="start">End Time</dt>

              <dd className="start">{end_time}</dd>
            </div>
          </dl>
          <div className="actions">
            <div>
              <a href={calendar} target="_blank" rel="noreferrer">
                <p className="text-indigo-600 links">
                  <span>Add Event To Calendar</span>
                </p>
              </a>
            </div>
            <div>
              <p className="text-indigo-600 links">
                <a href={contest.url} target="_blank" rel="noreferrer">
                  <span>Url</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
