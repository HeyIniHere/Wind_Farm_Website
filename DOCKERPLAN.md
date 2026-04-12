# Docker plan — Wind Farm website

Commands assume PowerShell and that your project root is `Wind_Farm_Website`.

## Build the image

From the project directory:

```powershell
docker build -t vr-windfarm-site .
```

## Run the container

Maps host port **8080** to nginx **80** inside the container. Change `8080` if that port is already in use.

```powershell
docker run -d -p 8080:80 --name vr-windfarm-web vr-windfarm-site
```

Then open: **http://localhost:8080**

## If the container name is already taken

Remove the old container, then run again:

```powershell
docker rm -f vr-windfarm-web
docker run -d -p 8080:80 --name vr-windfarm-web vr-windfarm-site
```

## Useful commands

| Action | Command |
|--------|---------|
| List images | `docker images` |
| List running containers | `docker ps` |
| Stop the site | `docker stop vr-windfarm-web` |
| Start it again | `docker start vr-windfarm-web` |
| View logs | `docker logs vr-windfarm-web` |
| Remove container (after stop) | `docker rm vr-windfarm-web` |

## Image name mismatch

If `docker run` tries to pull from Docker Hub and fails, build with the same tag you use in `docker run`:

```powershell
docker build -t vr-windfarm-site .
```

The run command must end with that image name: `vr-windfarm-site` (equivalent to `vr-windfarm-site:latest`).
