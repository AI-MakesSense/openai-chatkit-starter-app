import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What is the SCOUTs Method?",
    prompt: "What is the SCOUTs Method?",
    icon: "circle-question",
  },
  {
    label: "Create an Objective Charter",
    prompt: "I need help creating an Objective Charter",
    icon: "document",
  },
  {
    label: "Research plan",
    prompt: "Help me come up with a research plan",
    icon: "chart",
  },
  {
    label: "Testing questionnaire",
    prompt: "Help me creating a testing questionnaire for my project",
    icon: "clipboard-list",
  },
  {
    label: "Automation process outline",
    prompt: "Help me outline a process for an automation",
    icon: "gear",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";
export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: 'light',
  radius: 'pill',
  density: 'normal',
  color: {
    accent: {
      primary: '#00bfff',
      level: 1
    },
    surface: {
      background: '#ffffff',
      foreground: '#c2f0ff'
    }
  },
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
