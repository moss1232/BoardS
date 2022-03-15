import { format } from "date-fns";

export const serializeEvent = (event) => {
  if (event === null) {
    return null;
  }
  const title = event.title;
  const content = event.content;
  const start = new Date(event.start);
  const end = new Date(event.end);
  return {
    ...event,
    title,
    content,
    start,
    end,
    startDate: format(start, "yyyy/MM/dd"),
    startTime: format(start, "HH:mm"),
    endDate: format(end, "yyyy/MM/dd"),
    endTime: format(end, "HH:mm"),
    color: event.color || "#2196F3",
  };
};

export const serializeMessage = (message) => {
  if (message === null) {
    return null;
  }
  const title = message.title;
  const content = message.content;
  const team_id = message.team_id;
  const files = message.files;
  return {
    ...message,
    title,
    content,
    team_id,
    files,
  };
};

export const serializeTeam = (team) => {
  if (team === null) {
    return null;
  }
  const name = team.name;
  return {
    ...team,
    name,
  };
};
