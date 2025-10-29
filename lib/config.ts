// Imports from both of your files
import type { ChatKitOptions, StartScreenPrompt, ColorScheme, ThemeOption } from "@openai/chatkit";

// --- Step 1: Keep your working configuration constants ---
// (From your "Working Code")
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


// --- Step 2: Create the single, structured 'options' object ---
// (This structure is from your "Template Code")

export const options: ChatKitOptions = {
  
  // --- Populated with your "Working Code" constants ---
  api: {
    workflowId: WORKFLOW_ID,
    createSession: CREATE_SESSION_ENDPOINT,
    // TODO: configure auth, uploads if needed
  },

  // --- Copied directly from your "Template Code" for the new look & feel ---
  theme: {
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
    // This 'typography' section is the key part you wanted
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI", "Noto Color Emoji", sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
        // ...and 7 more font sources from your template would go here
      ]
    }
  },

  // --- Copied from "Template Code" + your "Working Code" placeholder ---
  composer: {
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760
    },
    // This is from your "Working Code"
    placeholder: PLACEHOLDER_INPUT, 
  },

  // --- Populated with your "Working Code" constants ---
  startScreen: {
    greeting: GREETING,
    prompts: STARTER_PROMPTS,
  },
  
  // Optional fields not shown: locale, initialThread, threadItemActions, header, onClientTool, entities, widgets
};

// You no longer need the 'getThemeConfig' function,
// as the theme is now part of the 'options' object above.
