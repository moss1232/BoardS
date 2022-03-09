import { format } from "date-fns";

export const serializeEvent = (event) => {
  if (event === null) {
    return null;
  }
  const team_id = event.team_id;
  const start = new Date(event.start);
  const end = new Date(event.end);
  return {
    ...event,
    team_id,
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

export const serializeUser = (user) => {
  if (user === null) {
    return null;
  }
  const name = user.name;
  const email = user.email;
  const password = user.password;
  return {
    ...user,
    name,
    email,
    password
  };
};
