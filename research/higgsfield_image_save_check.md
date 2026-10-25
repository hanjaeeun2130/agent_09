# Higgsfield MCP: Can Generated Images Be Saved to the Project Automatically?

- Date checked: 2026-10-25
- Condition: free use only (no credits spent)

## Conclusion

**Images are not saved automatically, but you do not have to download them by hand either.**

- The Higgsfield MCP has no option to save results into a local folder. Generated images stay on Higgsfield's servers, and the tools return them as **result URLs**.
- Claude Code can take that URL and download it with PowerShell (`Invoke-WebRequest`) into a project folder such as `research/images/<topic>/`. So the flow is "generate → get URL → Claude downloads it" with no manual step for the user.
- On this account, **free image generation is not possible** through this connector, so no real image was generated for the test.

## What Was Checked

| Item | Result |
|---|---|
| Account balance (`balance`) | Free plan, 10 credits |
| Cost of 1 image (`gpt_image_2_5`, 1:1, `get_cost` preflight) | 0.25 credits |
| Free generation (`use_free_gens: true`) | **Rejected**: "free generations can be spent from the ChatGPT (OpenAI) Higgsfield connector only" |
| Existing images in history (`show_generations`, `show_medias`) | None |
| Local download from a URL on this PC (`Invoke-WebRequest`) | Works (test file 5,430 bytes) |

## How the Tools Handle Output

- `generate_image`: shows results in a widget; no local save path parameter. The only destination option is `folder_id`, which is a Higgsfield **cloud** project folder.
- `jobs_wait`: returns job status and **result URLs**. These URLs are what can be downloaded.
- `get_project_asset_source`: returns a **download URL** for an asset in a Higgsfield project.
- `sandbox_exec`: runs in a **remote Higgsfield cloud sandbox**, not on this PC, so it cannot write files into this project.

## Recommended Workflow (when credits are allowed)

1. Generate with `generate_image` (or `generate_image_batch` for several).
2. Get the result URL(s) with `jobs_wait`.
3. Claude runs:
   ```powershell
   Invoke-WebRequest -Uri "<result URL>" -OutFile "research\images\<topic>\<name>.png" -UseBasicParsing
   ```
4. The image is now in the project and can be used in blog posts, reports or slides.

## Limits and Notes

- The step from URL to local file was tested with a public test file, not a real Higgsfield result URL, because no free generation was possible. Steps 2-3 should be confirmed once on the first real (paid) generation.
- Free generation through this Claude Code connector is not supported; it only works through the ChatGPT Higgsfield connector.
- Each image with `gpt_image_2_5` costs 0.25 credits, so the current 10 credits would cover about 40 images.
