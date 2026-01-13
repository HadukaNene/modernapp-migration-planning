# Runbook: Restart ModernApp

## When to use this runbook
Use this procedure when ModernApp becomes unresponsive, slow, or shows elevated error rates.

## Steps
1. Confirm the issue using monitoring dashboards.
2. Notify the team in the operations channel.
3. Restart the ModernApp service in Azure (App Service or Container App).
4. Validate the restart using health checks.
5. Monitor logs for 10 minutes after restart.
6. Update the incident log.

## Expected outcome
ModernApp returns to normal operation with stable performance.
