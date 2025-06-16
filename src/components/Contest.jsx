import { format } from "date-fns";
import "./Contest.css";
import { useEffect } from "react";

const Contest = ({ contest }) => {
  // console.log("list",contest);
  const start = format(
    new Date(contest.start),
    "MM-dd-yyyy HH:mm:ss"
  );

  const end = format(new Date(contest.end), "MM-dd-yyyy HH:mm:ss");

  const start_time = contest.start.replace(/[^a-zA-Z0-9 ]/g, "");
  const end_time = contest.end.replace(/[^a-zA-Z0-9 ]/g, "");
  const text = contest.event.replace(/ /g, "+");
  const calendar = `https://calendar.google.com/event?action=TEMPLATE&dates=${start_time}/${end_time}&text=${text}&location=${contest.href}`;
 
  const name = contest.host.slice(0, 80);

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
          <h5 className="">{contest.event}</h5>

          <dl className="timings">
            <div className="time-container">
              <dt className=" start">Start Time</dt>

              <dd className="start">{start}</dd>
            </div>

            <div className="time-container">
              <dt className="start">End Time</dt>

              <dd className="start">{end}</dd>
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
                <a href={contest.href} target="_blank" rel="noreferrer">
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
