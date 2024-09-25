import axios from "axios";
export const API_TOKEN =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODEwM2IwYjIyNjVlMmUyYzZjNWUzZDFjMjAxYWQ1NyIsInN1YiI6IjY0ZTE4ZTZlYTNiNWU2MDFkNTllYzNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r1f3ElDhRMu6lAnSPeciMKCHlOEul10UuHTlRFbFbUA";
export const API_URL = "https://api.themoviedb.org/3";

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_TOKEN,
  },
});

export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const img_sm = (path) => {
  return `https://image.tmdb.org/t/p/w185/${path}`;
};
export const img_md = (path) => {
  return `https://image.tmdb.org/t/p/w342/${path}`;
};
export const img_lg = (path) => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};

export const MOVIES = [
  {
    adult: false,
    backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    id: 976571,
    title: "Elemental",
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    vote_average: 7.7,
  },
  {
    adult: true,
    backdrop_path: "/lupYDG3lrqX9nTt3dwFiPSd3MqD.jpg",
    id: 832502,
    title: "The Monkey King",
    poster_path: "/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
    vote_average: 7.694,
  },
  {
    adult: false,
    backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    id: 976573,
    title: "Elemental",
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    vote_average: 7.7,
  },
];

// export const MOVIE_DETAILS = {
//   adult: true,
//   backdrop_path: "/lupYDG3lrqX9nTt3dwFiPSd3MqD.jpg",
//   genres: [
//     {
//       id: 16,
//       name: "Animation",
//     },
//     {
//       id: 14,
//       name: "Fantasy",
//     },
//     {
//       id: 12,
//       name: "Adventure",
//     },
//     {
//       id: 10751,
//       name: "Family",
//     },
//     {
//       id: 35,
//       name: "Comedy",
//     },
//   ],
//   id: 832502,
//   title: "The Monkey King",
//   tagline: "The legend has arrived.",
//   overview:
//     "A stick-wielding monkey teams with a young girl on an epic quest for immortality, battling demons, dragons, gods — and his own ego — along the way.",
//   popularity: 51.997,
//   poster_path: "/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
//   release_date: "2023-08-11",
//   runtime: 92,
//   status: "Released",
//   vote_average: 7.694,
//   vote_count: 18,
// };

// export const CASTS = [
//   {
//     adult: false,
//     gender: 2,
//     id: 154657,
//     known_for_department: "Acting",
//     original_name: "James Sie",
//     popularity: 1.375,
//     profile_path: "/yZ8SFsJJNmhgtNizwcWfknyBoBt.jpg",
//     character: "Elder Monkey (voice)",
//   },
//   {
//     adult: false,
//     gender: 2,
//     id: 14592,
//     known_for_department: "Acting",
//     original_name: "BD Wong",
//     popularity: 24.809,
//     profile_path: "/w7Hs9m6ocS2qlibvrLOvmyCKbAN.jpg",
//     character: "Buddha (voice)",
//   },
//   {
//     adult: false,
//     gender: 2,
//     id: 154652,
//     known_for_department: "Acting",
//     original_name: "James Sie",
//     popularity: 1.375,
//     profile_path: "/yZ8SFsJJNmhgtNizwcWfknyBoBt.jpg",
//     character: "Elder Monkey (voice)",
//   },
// ];
// export const CAST_DETAILS = {
//   adult: false,
//   also_known_as: [
//     "B.D. Wong",
//     "Bradley Darryl Wong",
//     "Bradd D. Wong",
//     "Bradd Wong",
//     "黃榮亮",
//     "黄荣亮",
//   ],
//   biography:
//     "BD Wong (born October 24, 1960) is an American actor, best-known for his roles on Law & Order: Special Victims Unit, Oz, and for his starring role in the Broadway production of M. Butterfly.",
//   birthday: "1960-10-24",
//   gender: 2,
//   id: 14592,
//   known_for_department: "Acting",
//   name: "BD Wong",
//   place_of_birth: "San Francisco, California, USA",
//   popularity: 24.809,
//   profile_path: "/w7Hs9m6ocS2qlibvrLOvmyCKbAN.jpg",
// };
