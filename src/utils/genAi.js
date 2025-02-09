import { GEMINI_API_KEY } from "./constants/random";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default genAI;
