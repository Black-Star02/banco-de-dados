from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import crud, schemas
from app.routes import users

router = APIRouter(prefix="/users", tags=["users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[schemas.UserRead])
def list_users(db: Session = Depends(get_db)):
    return crud.get_users(db)

@router.post("/", response_model=schemas.UserRead)
def add_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user)
