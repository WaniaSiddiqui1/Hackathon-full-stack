import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio', // Base path for the Studio
  projectId, // Sanity project ID
  dataset, // Sanity dataset
  schema, // Content schema
  plugins: [
    // Structure tool for defining the Studio's structure
    structureTool({ structure }),
    // Vision tool for running GROQ queries in the Studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
